
# NodeJs Express Hotel Project

TR->
Bu projede, MongoDB veritabanını ve Mongoose bağlantısını tercih ettim. Kullanıcıların şifrelerini güvenli bir şekilde saklamak için bcrypt.js kullanarak şifreleri hash'ledim ve veritabanına kaydettim. Oturum işlemleri için Express-Session kullandım ve oturum açan kullanıcının verilerine bağımsız erişebilmek adına middleware kullanarak locals'e kaydettim.
Node.js ve Express ile gerçekleştirdiğim bu proje, kullanıcıların sistemde üyelik oluşturabilmelerini ve oda rezervasyonları yapabilmelerini sağlıyor. Odalar, geçmiş tarih ve doluluk tarihlerine göre rezervasyon filtrelerine sahip. Aynı oda aynı zaman diliminde tekrar rezerve edilemez. Kullanıcılar, profil sayfasından gelecek rezervasyonları iptal edebilir ve geçmiş rezervasyonlarını inceleyebilirler.
Node.js sayesinde projeyi hızlı ve etkili bir şekilde geliştirebildim, aynı zamanda platformun genel performansını artırdım.


EN->

In this project, I chose the MongoDB database and utilized the Mongoose connection. To securely store user passwords, I employed bcrypt.js to hash the passwords before saving them to the database. For session operations, I implemented Express-Session and stored them in locals using middleware to independently access the data of the logged-in user.
Realized with Node.js and Express, this project enables users to register in the system and make room reservations. The rooms have booking filters based on past history and occupancy dates. The same room cannot be booked again within the same time period. Users have the capability to cancel future bookings and review past bookings from their profile page.
Thanks to Node.js, I was able to develop the project rapidly and effectively, simultaneously enhancing the overall performance of the platform.


## Kullanılan Teknolojiler / Used technologies

- Express Js

- Express-Session

- MongoDb

- Mongoose

- Bcrypt.js

- Pug View Engine

- Nodemon

- Cookie-Parser






  
