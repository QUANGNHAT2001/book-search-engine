// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`{"kind": "books#volume",
      "id": "gG45ywEACAAJ",
      "etag": "8UFdbED7Yyg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/gG45ywEACAAJ",
      "volumeInfo": {
        "title": "Xử lý ảnh cô Kim Nga",
        "subtitle": "Xử lý ảnh cô Kim Nga",
        "authors": [
          "Jesper Wisborg Krogh"
        ],
        "publisher": "Apress",
        "publishedDate": "2020-03-17",
        "description": "Identify, analyze, and improve poorly performing queries that damage user experience and lead to lost revenue for your business. This book will help you make query tuning an integral part of your daily routine through a multi-step process that includes monitoring of execution times, identifying candidate queries for optimization, analyzing their current performance, and improving them to deliver results faster and with less overhead. Author Jesper Krogh systematically discusses each of these steps along with the data sources and the tools used to perform them. MySQL 8 Query Performance Tuning aims to help you improve query performance using a wide range of strategies. You will know how to analyze queries using both the traditional EXPLAIN command as well as the new EXPLAIN ANALYZE tool. You also will see how to use the Visual Explain feature to provide a visually-oriented view of an execution plan. Coverage of indexes includes indexing strategies and index statistics, and you will learn how histograms can be used to provide input on skewed data distributions that the optimizer can use to improve query performance. You will learn about locks, and how to investigate locking issues. And you will come away with an understanding of how the MySQL optimizer works, including the new hash join algorithm, and how to change the optimizer’s behavior when needed to deliver faster execution times. You will gain the tools and skills needed to delight application users and to squeeze the most value from corporate computing resources. What You Will Learn Monitor query performance to identify poor performers Choose queries to optimize that will provide the greatest gain Analyze queries using tools such as EXPLAIN ANALYZE and Visual Explain Improve slow queries through a wide range of strategies Properly deploy indexes and histograms to aid in creating fast execution plans Understand and analyze locks to resolve contention and increase throughput Who This Book Is For Database administrators and SQL developers who are familiar with MySQL and need to participate in query tuning. While some experience with MySQL is required, no prior knowledge of query performance tuning is needed.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1484255836"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781484255834"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 899,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "1. tìm tài liệu
2. lựa chọn kỹ thuật
3. cài đặt
4. viết báo cáo
5. làm slide
T--> phương pháp, mô hình toán học mỗi biến thể (sự thay đổi) --> kỹ thuật (thuật toán)
delta = r + 20
I' = 	0 0 0 9 9
        0 0 0 0 9
        9 0 9 9 0
        0 0 0 0 0
I = 10 50 100 3
    250 3 50  70
    60 40 20  10
I' = 245 200 155 252
     5   252 205 185
     195 215 235 245
Biến đổi ảnh màu thành ảnh xám, ảnh nhị phân, ảnh âm bản, ảnh hàm mũ
   Gray = Red * 0.298 + Green * 0.588 + Blue * 0.114
I = 1 7    2*2
    4 2
I' = 1 ",
          "thumbnail": "http://books.google.com/books/content?id=gG45ywEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com.vn/books?id=gG45ywEACAAJ&dq=%24%7Bquery%7D&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com.vn/books?id=gG45ywEACAAJ&dq=%24%7Bquery%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/MySQL_8_Query_Performance_Tuning.html?hl=&id=gG45ywEACAAJ"
      },
      "saleInfo": {
        "country": "VN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "VN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=gG45ywEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This book will help you make query tuning an integral part of your daily routine through a multi-step process that includes monitoring of execution times, identifying candidate queries for optimization, analyzing their current performance, ..."
      }
      }`);
};
