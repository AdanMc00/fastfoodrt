#!/usr/local/bin/node
const moment = require('moment'),
    program = require('./src/models/program')
    perx = require('./src/models/perx')


let populators = [
    {
        // PostCode
        verifyProperty: 'id',
        model: program.Program,
        data: [
            {
                id: '18',
                programa: 'Second Women’s Economic Security Statement',
                monto: '240000000',
            },
            {
                id: '16',
                programa: 'Job Trainer Fund',
                monto: '1000000000',
            },
            {
                id: '17',
                programa: 'Apprenticeships Program',
                monto: '1200000000',
            },
            {
                id: '15',
                programa: 'National Debt',
                monto: '573100000000',
            },
            {
                id: '19',
                programa: 'Modern Manufacturing Plan',
                monto: '1300000000',
            },
            {
                id: '20',
                programa: 'Research and Development Incentives',
                monto: '2000000000',
            },
            {
                id: '21',
                programa: 'Additional funding to the CSIRO',
                monto: '459000000',
            },
            {
                id: '22',
                programa: 'New research funding for universities',
                monto: '1000000000',
            },
            {
                id: '23',
                programa: 'Low emissions and renewable technologies',
                monto: '1900000000',
            },
            {
                id: '24',
                programa: 'Road safety upgrades ',
                monto: '2000000000',
            },
            {
                id: '25',
                programa: 'Concessional loans for Farmers',
                monto: '2000000000',
            },
            {
                id: '26',
                programa: 'Tourism Plan',
                monto: '350000000',
            },
            {
                id: '27',
                programa: 'For Australian exporters',
                monto: '317000000',
            },
            {
                id: '28',
                programa: 'Wyangala and Dungowan dams ',
                monto: '567000000',
            },
            {
                id: '29',
                programa: 'Water infrastructure ',
                monto: '2000000000',
            },
            {
                id: '30',
                programa: 'Environmental Funding',
                monto: '1800000000',
            },
            {
                id: '31',
                programa: 'Upgrade facilities',
                monto: '233000000',
            },
            {
                id: '32',
                programa: 'Ocean Protection',
                monto: '67000000',
            },
            {
                id: '33',
                programa: 'Construction of affordable housing',
                monto: '1000000000',
            },
            {
                id: '34',
                programa: 'Rental Assistance ',
                monto: '4600000000',
            },
            {
                id: '35',
                programa: ' Indigenous Home Ownership Program',
                monto: '150000000',
            },
            {
                id: '36',
                programa: 'NDIS',
                monto: '3900000000',
            },
            {
                id: '37',
                programa: 'COVID-19 Response',
                monto: '16000000000',
            },
            {
                id: '38',
                programa: 'Aged Care',
                monto: '1600000000',
            },
            {
                id: '39',
                programa: 'Cyber-security plan',
                monto: '1700000000',
            },
            {
                id: '40',
                programa: 'Law enforcement ',
                monto: '450000000',
            },
            {
                id: '41',
                programa: 'Defence spending',
                monto: '1000000000',
            },
            {
                id: '43',
                programa: 'Additional Spending',
                monto: '81067000000',
            },
        ],
    },
    {
        //perX
        verifyProperty: 'id',
        model: perx.PerX,
        data: [
            {
                id: '1',
                por: 'Per Household',
                cantidad: 8420000,
                fecha: '2020-09-30 20:38:54',

            },
            {
                id: '2',
                por: 'Per Person',
                cantidad: 24998000,
                fecha: '2020-10-06 03:05:15',
            }
        ]
    }
];

let x = 0;

function nextPopulator() {
    if (x >= populators.length) return console.log('Population terminated');
    let populator = populators[x],
        new_data = [],
        y = 0;

    function insertData() {
        populator.model.bulkCreate(new_data).then(() => {
            console.log(`Inserted ${new_data.length} items in ${populator.model.name}`);
        }).catch(error => {
            console.dir(error);
        }).finally(() => {
            x++;
            nextPopulator();
        });
    }

    function sig() {
        if (y >= populator.data.length) return insertData();
        let item = populator.data[y],
            where = {};
        where[populator.verifyProperty] = item[populator.verifyProperty];
        populator.model.findOne({where}).then((data) => {
            if (!data) new_data.push(item);
        }).catch(error => {
            console.dir(error);
        }).finally(() => {
            y++;
            sig();
        });
    }

    sig();
}

console.log('Populating DB');
nextPopulator();
