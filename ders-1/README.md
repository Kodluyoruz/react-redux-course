# Node, npm , nvm, package.json, ECMAScript hakkında genel bilgilendirme

## Node.js Nedir ?

Nodejs, javascript tabanlı scriptleri yorumlanabilen ve çalıştırabilen,
hızlı, ölçeklenebilir network uygulamaları geliştirmeyi sağlayan bir çalışma zamanı ortamıdır(runtime enviroment)
Güncel versiyonuna erişmek için: https://nodejs.org/en/

Örnek: Example adında masaüstünde bir klasörümüz olsun içerisine index.js adında içerisinde javascript kodlarımızın bulunduğu bir dosyamız olsun. Bu dosya içerisindeki kodların çalıştığını görmek için. Terminalimizi(komut satırımızı) erişmemiz gerekmektedir. Bu aşamada "cd" komutu dosyalar arasında gezinilebilir vs "ls" komutu ilede bulunduğunuz dosya içeriğinde bulunan alt klasörler ,dosyalar vs görüntülenebilir. Örn: cd Desktop/Example
Example klasörümüze erişimi sağladıktan sonra klasörümüz içerisindeki index.js dosyamızı çalıştırmak için

```bash
node index.js
```

Komutunu çalıştırarak index.js dosyamız içerindeki yazmış olduğumuz javascript kodları çalıştırma işlemi gerçekleşicektir.

## Npm Nedir ?

npm (Node Package Modules), Node.js için bir takım script’lerin otomatik olarak indirilmesini, güncellenmesini,
silinmesini sağlayan bir paket yöneticisidir. Komut Satırı (terminal) üzerinden çalışır. Node.js kurulumu ile birlikte gelmektedir.
Projelerde kullanılacak olan teknolojilere yönelik npm versiyonları değişebilmektedir. Bunun için sisteminizde kullandığınız node ve npm
versiyonunu öğrenmek için komut satırına(terminal);

```bash
node -v
```

diyerek node versiyonunu

```bash
npm  -v
```

diyerek npm versiyonunu öğrenilir.

Npm ile temel olarak yapabileceğimiz şeyler ise şöyledir :

- Proje oluşturmak

- Otomatik ya da manuel olarak paketleri yükleme

- Sistemdeki paketleri silmek

- Sistemdeki paketleri listeleme

- Sistemdeki paketleri update etmek

! Npm komut satırı üzerinden çalışan bir uygulamadır.

Projede kullanılacak teknolojinin ihtiyacı olan bir node ve npm versiyonu sistemimizde yoksa
yeni versiyonu sistemimize kurmamız gerekmektedir. Fakat unutulmaması gereken konulardan biride kurmuş olduğunuz yeni node ve npm paketi eski projelerinizde sorun çıkarabilir. Bunun için nvm (node version manager) kurulumu yapılmalıdır. NVM sayesinde makinenizde birden fazla Node.js versiyonuna sahip olup sisteminizde olan node ve npm
versiyonları arasında geçiş yapabilirsiniz.

Yeni node ve npm versiyonu kurmak için

```bash
nvm install x.x.x
```

Sisteminizde yüklü olan node vs npm pakatelerini görüntülemek için komut satırına;

```bash
nvm ls
```

Kullanmak istediğiniz versiyon için komut satırına;

```bash
nvm use x.x.x
```

## Package.json Nedir ?

Package.json dosyası projeniz ile bilgilerin tutulduğu json dosyasıdır. Bu json dosyasında projenizin adı, açıklaması, anahtar kelimeleri, git sayfası, lisansı, versiyonu, başlama dosyası ve test komutu bulunur. Bu dosyayı oluşturmak için komut satırına;

```bash
npm init
```

Proje hakkında bize cevaplamamız için sorular gelecektir. Soruları tek tek cevaplayabilir ya da enter yapıp daha sonra dosyayı açıpta yazabilirsiniz.

```bash
npm init -y
```

yazarsanız eğer tüm soruları otomatik olarak geçecektir. Daha sonra dosyadan değişiklik yapabilirsiniz.

Örnek2: İlk örnekte ki yazmış olduğumuz kodların bulunduğu Example klasörü içerisinde oluşturulduğumuzu varsayarsak Example klasör içeriğinde artık

- index.js
- package.json

Bulunucaktır. İlk örnekte projemizi çalıştırmak için komut satırına

```bash
node index.js
```

Yazmamız gerekmekteydi. Projemizi package.json üzerinden çalıştırmak için, package.json dosyasının içerisindeki "scripts" kısmının içerisine "start" scriptimizi yazabilir ve npm ile çalıştırabiliriz.

```bash
 "start": "node index.js"
```

Scriptini package.json dosyamıza ekledikten sonra projemizi artık çalıştırmak için

```bash
npm start
```

Komutunu terminalimize projemizi çalıştırabiliriz.

Npm ile Paket Kurulumu

```bash
npm install <paket adı> --save
```

- install :paket indirme komutu. Kısıltma olarak

```bash
npm i <paket adı>
```

- --save : indirilen paket bilgisini package.json içerisinde dependencies kısmında, indirilen paket ise node_modules altına yüklenir. Npm 5.0.0 versiyonun altında zorunlu iken npm 5.0.0 versiyonundan sonra --save yazma zorunluluğu paket kurulumları için zorunluluktan kalkmıştır.

## ECMAScript (ES) Nedir ?

ECMAScript bir yazılım dili standardıdır. JavaScript ise bu standartların uygulanmış olduğu en popüler programlama dilidir.

## ECMAScript 6 (ES6) Nedir?

ES6 (ECMAScript 6), Javascript'in 2015 yılında belirlenen yeni standartlarını temsil eder. Bazı kaynaklarda ES 2015 olarak da geçer. Terminalinimiz ES6 bilmemektedir. Yazdığımız ES6 ile kodları terminalin anlayabiliceği formata (ES5)e çevirmek için paket kurulumları yapmamız ve bu kurmuş olduğumuz paketler üzerinden projemizi çalıştırmamız gerekmektedir.

Kurulması gereken paketler.

```bash
npm i babel-cli babel-preset-es2015
```

! Birden fazla paket kurulumu yapmak için paket isimleri arasında boşluk bırakmak yeterlidir. babel-cli ve babel-preset-es2015 ayrı paketlerdir.

Projeyi kurmuş olduğumuz paketler üzerinden çalıştırmak için package.json dosyası içerisindeki scripts kısmına

> \_NOTE: "start": "babel-node index.js --presets es2015",

Komutunu yazıp.

```bash
npm start
```

İle projemiz içerisinde bulunan index.js dosyası çalıştırılır.

! babel-node ile index.js dosyamızın çalıştırılmasını, --presets es2015 kısmı ile de ESX standartında yazılan kodların ES5 formatına dönüştürülerek terminalimizin anlayabiliceği formata uyarlaması gerçekleşir.

> \_NOTE: Projeyi clone ettikten sonra terminalinizden projemizin bulunduğu dizine erişip "npm install" komutunu çalıştırmayı unutmayınız !

## Kurulması gerekenler.

- [VS Code](https://code.visualstudio.com/) - Visual Studio Code
- [Nodejs](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)
