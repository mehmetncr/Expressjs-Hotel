
# NodeJs Express Hotel Project

TR->
NodeJs Express kullanılarak yaptığım bu projede veri tabanı olarak MongoDb ve bağlantı için Mongoose kullandım. Kayıt olan kullanıcıların şifrelerinin güvenliği için bcrypt.js kullanarak şifreleri hash'leyerek veri tabanına kaydettim. Oturum işlemleri için Express-Session kullandım. Oturum açan kullananıcının verilerine bağımsız erişebilmek için middleware kullanarak locals'e kaydettim. Kullanıcılar sisteme üye olabilr ve oda rezervasyonu yapabilirler. Odalar geçmiş tarih ve doluluk tarihlerine göre rezervasyon filtrelerine sahiptir. Bir oda aynı zaman içinde tekrar rezerve edilemez. Kullanıcı isterse profilim sayfasından gelecek rezervasyonlarını iptal edebilir ve geçmiş rezervasyonlarını görebilir.

EN->

I used MongoDb as database and Mongoose for connection in this project I made using NodeJs Express. For the security of the passwords of the registered users, I hashed the passwords using bcrypt.js and saved them to the database. I used Express-Session for session operations. In order to have independent access to the data of the logged in user, I saved it to locals using middleware. Users can register to the system and book rooms. Rooms have reservation filters according to past dates and occupancy dates. A room cannot be booked again at the same time. The user can cancel future bookings and view past bookings from the My Profile page.
## Kullanılan Teknolojiler / Used technologies

- Express Js

- Express-Session

- MongoDb

- Mongoose

- Bcrypt.js

- Pug View Engine

- Nodemon

- Cookie-Parser






  
