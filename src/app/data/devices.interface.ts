export interface IDevice {
  id: number;
  name: string;
  last_active: Date | null;
  [key: string]: any;
}

export interface DevicesResponse {
  data: {
    metering_devices: {
      current_page: number;
      data: IDevice[];
    };
  };
}
