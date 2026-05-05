// adicionar os imports

import { QuitandaController } from "./Controller/QuitandaController.js";
import { QuitandaModel } from "./Model/QuitandaModel.js";
import { QuitandaView } from "./View/QuitandaView.js";

const model = new QuitandaModel(); //cria o model
const view = new QuitandaView(); //cria a view
const controller = new QuitandaController(model, view); //cria o controller

controller.init(); //iniciar o sistema
