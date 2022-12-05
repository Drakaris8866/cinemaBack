import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { MovieController } from './movie.controller'
import { MovieModel } from './movie.model'
import { MovieService } from './movie.service'
import {UserModule} from "../user/user.module";

@Module({
	controllers: [MovieController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: MovieModel,
				schemaOptions: {
					collection: 'Movie',
				},
			},
		]),
		UserModule,
	],
	providers: [MovieService],
	exports: [MovieService],
})
export class MovieModule {}
