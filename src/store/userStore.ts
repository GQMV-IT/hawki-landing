import { create } from 'zustand';
import { InstagramUserInfo } from '@/services';

export type BaseUserData = {
    name: string;
    phone: string;
}

export type InstagramUserData = {
    instagram: string;
    instagramInfo: InstagramUserInfo;
}

export type UserData = BaseUserData & InstagramUserData;

interface UserStore {
    // User data
    name: string | null;
    phone: string | null;
    instagram: string | null;
    instagramInfo: InstagramUserInfo | null;
    
    // Actions
    setUserData: (data: UserData) => void;
    setBaseData: (data: BaseUserData) => void;
    setInstagramInfo: (data: InstagramUserData) => void;
    clearUserData: () => void;
    
    // Helpers
    hasUserData: () => boolean;
}

export const useUserStore = create<UserStore>((set, get) => ({
    // Initial state
    name: null,
    phone: null,
    instagram: null,
    instagramInfo: null,
    
    // Set complete user data at once
    setUserData: (data) => set({
        name: data.name,
        phone: data.phone,
        instagram: data.instagram,
        instagramInfo: data.instagramInfo,
    }),
    
    // Set only base data (name, phone, instagram username)
    setBaseData: (data) => set({
        name: data.name,
        phone: data.phone,
    }),
    
    // Set Instagram info separately
    setInstagramInfo: (data) => set({
        instagram: data.instagram,
        instagramInfo: data.instagramInfo,
    }),
    
    // Clear all user data
    clearUserData: () => set({
        name: null,
        phone: null,
        instagram: null,
        instagramInfo: null,
    }),
    
    // Check if user has data
    hasUserData: () => {
        const state = get();
        return !!(state.name && state.phone && state.instagram);
    },
}));

