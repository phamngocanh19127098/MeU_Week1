# MeU_Week1
Run Project


Step 1 : Clone Project

        Create new folder, open cmd, go to dir of new folder
        Enter : git clone https://github.com/phamngocanh19127098/MeU_Week1
        
Step 2 : Download Xampp to work with MySQL 
        
        Start MySQL in Xampp
        Once MySQL start successful, open your browser and access http://localhost:80/phpmyadmin/
        Create Schema name 'inventory'
        
        Create table 'product' 
        Run file mysql.sql (attach in project) in http://localhost:80/phpmyadmin/
       
        
 Step 3 : Open project in IDE like Visual Studio, Intellij, ...
        
          Open terminal, to init nodes and dependecies, enter: npm install 
          
          Start project : npm start
          Test project : npm run test
          Observe product table : http://localhost:{{your port}}/


Technique Applied NodeJS Framework Express, hbs view engine, MySQL
