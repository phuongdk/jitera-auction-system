export interface Item {
    id: string
    userId: string
    name: string
    price: number
    bid_price: number
    status: string
    time_window: number
    bid_interval?: number
}

export interface UserInfo {
    id: string
    email: string
    first_name: string
    last_name: string
    full_name: string
    balance: number
    temporary_hold: null
    updateData: (data: UserInfo) => void
}