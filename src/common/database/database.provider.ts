import { Sequelize } from 'sequelize-typescript';
import { cartModels } from 'src/cart/cart.provider';
import { categoryModels } from 'src/category/category.provider';
import { productModels } from 'src/product/product.provider';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        console.log("config",config);
        const sequelize = new Sequelize(config);
        sequelize.addModels([
           ...categoryModels,
           ...productModels,
           ...cartModels
         ]);
        await sequelize.sync({alter:true});
        return sequelize;
    },
}];