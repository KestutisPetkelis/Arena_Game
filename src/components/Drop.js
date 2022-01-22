import React from 'react';

const Drop = () => {
    const divStyle = {
        width: "100%",
        height: "95%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px"
    };

    const dropItems = [
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Leather_09.gif",
            price: 245,
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 63
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_33.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
            price: 497
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Blue_01.gif",
            price: 33
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_05.gif",
            price: 52
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Grey_01.gif",
            price: 27
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_16.gif",
            price: 22
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 173
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_23.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 123
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Wolf.gif",
            price: 70
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain_05.gif",
            price: 48
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_22.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_40.gif",
            price: 44
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_13.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_16.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
            price: 1088
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_09_Red.gif",
            price: 20
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_EnchantedMageweave.gif",
            price: 200
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_FelclothBag.gif",
            price:240
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_10_Red.gif",
            price: 180
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_07_Black.gif",
            price: 150
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_02.gif",
            price: 120
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_08.gif",
            price: 0
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_27.gif",
            price: 500
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_09.gif",
            price: 349
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_01.gif",
            price: 88
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_08.gif",
            price: 458
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Leather01.gif",
            price: 255
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_03.gif",
            price: 128
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_05.gif",
            price: 16
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Plate_07.gif",
            price: 612
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Chain_05.gif",
            price: 605
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_02.gif",
            price: 52
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Fabric_01.gif",
            price: 24
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_16.gif",
            price: 177
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_32.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_49.gif",
            price: 198
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_16.gif",
            price: 97
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_14.gif",
            price: 118
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_28.gif",
            price: 59
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_63.gif",
            price: 148
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
            price: 21
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 123
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_06.gif",
            price: 114
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 48
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_23.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_20.gif",
            price: 27
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 6
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
            price: 29
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_69.gif",
            price: 689
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_121.gif",
            price: 178
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_31.gif",
            price: 38
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_39.gif",
            price: 183
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_125.gif",
            price: 140
        },    {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_108.gif",
            price: 258
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_13.gif",
            price: 95
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_20.gif",
            price: 683
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_30.gif",
            price: 122
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Belt_22.gif",
            price: 48
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_09.gif",
            price: 78
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Mail_21.gif",
            price: 800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_16.gif",
            price: 110
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_14.gif",
            price: 136
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
            price: 92
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_06.gif",
            price: 239
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_03.gif",
            price: 263
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
            price: 18
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_13.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_20.gif",
            price: 197
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Plate_12.gif",
            price: 1200
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_13.gif",
            price: 316
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_31.gif",
            price: 12
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_36.gif",
            price: 15
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_40.gif",
            price: 58
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_12.gif",
            price: 1
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/Achievement_Dungeon_UlduarRaid_Misc_02.gif",
            price: 440
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_35.gif",
            price: 57
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_33.gif",
            price: 20
        }
    ]
    



  return (
    <div style={divStyle}>
        <h3 className='mh-50'>You WIN!!!</h3>
        <h4>Some cookies from opponent?</h4>
    </div>
    );
};

export default Drop;
