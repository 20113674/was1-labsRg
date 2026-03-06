'use strict';

import logger from "../utils/logger.js";
import employee from "../models/employee.js";

//const employees = employee.getAppInfo();

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    
console.log(employees);
   const viewData = {
      title: "About the Playlist App",
      employees: employee.getAppInfo(),
     
    };  
    logger.info(viewData.employees)
    response.render('about', viewData);
  },
};


export default about;
