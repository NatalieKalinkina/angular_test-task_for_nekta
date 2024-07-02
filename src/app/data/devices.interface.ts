export interface DevicesResponse {
  data: {
    metering_devices: {
      current_page: number;
      data: [
        {
          id: number;
          name: string;
          last_active: Date | null;
        }
      ];
    };
  };
}
