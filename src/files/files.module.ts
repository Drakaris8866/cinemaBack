import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'

import { FilesController } from './files.controller'
import { FilesService } from './files.service'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `https://cinema-back-rqi4.vercel.app/`,
			serveRoot: '/uploads',
		}),
	],
	providers: [FilesService],
	controllers: [FilesController],
})
export class FilesModule {}
