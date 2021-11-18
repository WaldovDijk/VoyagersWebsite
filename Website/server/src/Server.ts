import { Configuration, Inject } from '@tsed/di';
import { PlatformApplication } from '@tsed/common';
import '@tsed/platform-express'; // /!\ keep this import
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import '@tsed/ajv';
import { config, rootDir } from './config';

@Configuration({
  ...config,
  acceptMimes: ['application/json'],
  httpPort: false,
  httpsPort: 4000, // CHANGE
  mount: {
    '/': [`${rootDir}/controllers/**/*.ts`],
  },
  views: {
    root: `${rootDir}/views`,
    extensions: {
      ejs: 'ejs',
    },
  },
  exclude: ['**/*.spec.ts'],
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit(): void {
    this.app
      .use(
        cors({
          origin: [
            'https://www.voyagersamsterdam.com/',
            'https://voyagersamsterdam.com/',
          ],
          credentials: true,
        })
      )
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
  }
}
