import { create } from "zustand"

interface bannerState {
    headerBanner: object
}

export const useBannerStore = create<bannerState>()((set) =>({
    headerBanner: {},
    setBanner: () => set((state: {headerBanner: object}) => ({
        headerBanner: state.headerBanner
    }))
    
}))