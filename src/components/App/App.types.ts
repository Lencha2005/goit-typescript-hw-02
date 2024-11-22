export interface Image {
    id: string;
    alt_description: string;
    urls: {
        regular: string;
        small: string;
    };
    likes: number;
    user: {
        name: string;
    };
  };
  
//   export interface ImgModal {
//     id: string;
//     alt_description: string;
//     url: string;
//     likes: number;
//     autorName: string;
//   };

export interface ApiResponse {
    data: {
        results: Image[];
        total_pages: number;
    };
  }