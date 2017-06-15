
- Navigation: as a user I...
  * on 1st time: user will have to **Signup**/ **login** (email, password, **maybe had skip button and add use as  guest**)
  * on 2nd logged in and so:
    * user will land on **Select Bus Line** page (switch city list, select bus line, from and to location, number of passengers)
  * can navigate to **Call Service Taxi** from **Selecte Bus Line**
  * can navigate to **User's settings** from **Call Service Taxi**
  * can navigate to view a **Call Service Taxi** from **User's settings**


- Views: as a passenger I...
  * see a **login** / **signup** page (first login)
  * see a display of the map with all **buses** of the **selected line**
    * see **all buses** with the **same line** (opacity 0.5);
    * see the **ETA** of the **specific bus** the passenger assign to
  * see a **Setting page** of passenger

- Views: as a driver I...
  * see a **login** / **signup** page (first login)
  * see a display of the map with all **Active drivers**  (onDrive) from the same **station**
  * see a display of the map with all **passengers**
    * see **all passengers** that are waiting for the **same line** (opacity 0.5);
    * see the **passengers** that the driver **needs to pick up**
  * see a **Setting page** of driver

  Views: as an admin station:
  * see a disaply of the map with:
    * all **passenger** waiting for buses of the specific station
    * all **Active drivers** with the **number of available seats**
    * all **passenger** waiting for buses of the specific station
    * all **Active drivers** with the **number of available seats**


  Views: as an super-admin:
  * see all **stations**
  * see all **drivers** of single **station**
  * see all **passengers**
  * create new **station** with **admin station user** and  **X number of drivers** accounts
  * delete/ update **station** / **admin** and **drivers** license



- Actions: as a **passenger** I...
  * can create my account  (GET)
  * can edit my account's info  (PUT)
  * can delete my account  (PUT)
  * can request a taxi  (PUT)
  * can stop requested a taxi  (PUT)


- Actions: as a **driver** I...
  * can create my account  (GET)
  * can edit my account's info  (PUT)
  * can delete my account  (PUT)
  * can start a drive  (PUT)
  * can stop a drive  (PUT)


  - Actions: as a **admin station** I...
  * can add **drivers** account to **station** (GET)
  * can **add / remove**  passenger to specific **driver**   (PUT)
  * can delete driver's account from station  (PUT)
  * can edit my account's info  (PUT)


