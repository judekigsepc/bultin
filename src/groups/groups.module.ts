import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
