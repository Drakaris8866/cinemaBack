import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as express from 'express';

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.use((req, res, next) => {
  	res.header('Access-Control-Allow-Origin', '*');
 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  	next();
	});
	app.enableCors();
	app.use(express.static(join(__dirname, '..' ,'uploads')))
	await app.listen(4200)
}
bootstrap()


