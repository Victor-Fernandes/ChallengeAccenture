import {Router} from 'express';

import NumberForLetterController from './Controllers/NumberForLetterController'

const routes = new Router();

routes.post('/translate', NumberForLetterController.store)

export default routes;