import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Logger, NotFoundException } from '@nestjs/common';
import {
  Connection,
  FilterQuery,
  Model,
  SaveOptions,
  Types,
  UpdateQuery,
} from 'mongoose';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(
    protected readonly model: Model<TDocument>,
    private readonly connection: Connection,
  ) {}

  async create(
    document: Partial<Omit<TDocument, '_id'>>,
    options?: SaveOptions,
  ): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });

    return (
      await createdDocument.save(options)
    ).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery, {}, { lean: true });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found');
    }

    return document as unknown as TDocument;
  }

  async findOneUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
    });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found');
    }

    return document;
  }

  async upsert(
    filterQuery: FilterQuery<TDocument>,
    document: Partial<TDocument>,
  ) {
    return this.model.findOneAndUpdate(filterQuery, document, {
      lean: true,
      upsert: true,
      new: true,
    });
  }

  async find(filter = {}): Promise<TDocument[]> {
    const document = await this.model.find(filter, {}, { lean: true }).exec();

    return document as TDocument[];
  }

  async exists(filterQuery: FilterQuery<TDocument>): Promise<boolean> {
    const document = await this.model.countDocuments(filterQuery).exec();
    return document > 0;
  }

  async findById(id: string | Types.ObjectId): Promise<TDocument | null> {
    return await this.model.findById(id).exec();
  }

  async delete(id: string | Types.ObjectId): Promise<TDocument | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
