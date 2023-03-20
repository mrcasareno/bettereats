import axios from 'axios'

const BASE_URL = "https://farmersmarkets-f8734-default-rtdb.firebaseio.com"

export async function fetchMarkets() {
    const response = await axios.get(BASE_URL + '/.json');

    const markets = [];

    for (const key in response.data)
    {
        const open_days = {
            sunday: response.data[key]['Sunday'],
            monday: response.data[key]['Monday'],
            tuesday: response.data[key]['Tuesday'],
            wednesday: response.data[key]['Wednesday'],
            thursday: response.data[key]['Thursday'],
            friday: response.data[key]['Friday'],
            saturday: response.data[key]['Saturday']
        }
        const marketObj = {
            id: key,
            name: response.data[key]['listing_name'],
            address: response.data[key]['location_address'],
            fruit: response.data[key]['Fresh fruits'],
            vegetables: response.data[key]['Fresh vegetables'],
            pet_food: response.data[key]['Pet food'],
            baked_goods: response.data[key]['Baked goods'],
            body_care: response.data[key]['Soap,body care products'],
            juices: response.data[key]['Juices,non-alcoholic ciders'],
            dairy: response.data[key]['Dairy products'],
            crafts: response.data[key]['Crafts,woodworking items'],
            plants: response.data[key]['Bedding plants'],
            seafood: response.data[key]['Fish,seafood'],
            eggs: response.data[key]['Eggs'],
            herbs: response.data[key]['Fresh,dried herbs'],
            cash: response.data[key]['cash'],
            card: response.data[key]['debit_credit'],
            ebt: response.data[key]['SNAP_option_1'] + response.data[key]['SNAP_option_2'],
            mobile: response.data[key]['mobile_payment'],
            checks:response.data[key]['check_payment'],
            open: parseInt(response.data[key]['open']),
            close: parseInt(response.data[key]['close']),
            x: response.data[key]['location_x'],
            y: response.data[key]['location_y'],
            open_days: open_days
        };
        markets.push(marketObj);
    }

    return markets;
}