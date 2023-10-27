export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface ILocationWithMessage extends ILocation {
  message: string;
}

