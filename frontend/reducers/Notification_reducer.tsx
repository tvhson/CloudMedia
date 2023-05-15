import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Notification {
  _id: any;
  userId: any;
  logo: any;
  notificationType: any;
  content: any;
  isRead: boolean;
  updatedAt: any;
}

interface Notifications {
  arr: Notification[];
  numberNoti: number;
}

const initialState: Notifications = {
  arr: [],
  numberNoti: 0,
};

const NotificationSlice = createSlice({
  name: 'Notification',
  initialState,
  reducers: {
    setNotifications: (state: Notifications, action: PayloadAction<any>) => {
      state.numberNoti = 0;
      action.payload.map((item: any) => {
        state.arr.push(item);
        if (!item.isRead) {
          state.numberNoti++;
        }
      });
    },
  },
});

export const {setNotifications} = NotificationSlice.actions;
export default NotificationSlice.reducer;
