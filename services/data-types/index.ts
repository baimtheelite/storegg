export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    banks: BanksTypes[];
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface gameCategoryTypes {
    _id: string;
    name: string;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface PlayerTypes {
    avatar: string;
    email: string;
    id: string;
    name: string;
    username: string;
}

export interface JWTPayloadTypes {
    player: PlayerTypes;
    iat: number;
}

export interface CheckoutTypes {
    voucher : string,
    nominal : string,
    payment : string,
    bank : string,
    name : string,
    accountUser : string
}

export interface HistoryVoucherTopupTypes {
    category: string;
    coinName: string;
    coinQuantity: number;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface HistoryTransactionTypes {
    _id: string;
    name: string;
    historyVoucherTopup : HistoryVoucherTopupTypes
    value: number;
    status: string;
    historyPayment: HistoryPaymentTypes;
}

export interface HistoryPaymentTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
    type: string;
}


export interface TopupCategoriesTypes {
    _id: string;
    value: number;
    name: string;
}