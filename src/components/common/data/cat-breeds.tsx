export interface CatBreed {
  name: string;
  temperament: string;
  origin: string;
  description: string;
}

export class CatBreedsAPI {
  static getAll = async (): Promise<CatBreed[]> => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/breeds?limit=10",
    );
    const data = (await response.json()) as CatBreed[];

    if (Array.isArray(data)) {
      return data;
    } else {
      // Handle the case where the response is not an array
      throw new Error("Invalid API response format");
    }
  };
}
