import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';

import { FilesController } from './files.controller'
import { FilesService } from './files.service'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', '..', 'uploads'),
		}),
	],
	providers: [FilesService],
	controllers: [FilesController],
})
export class FilesModule {}
