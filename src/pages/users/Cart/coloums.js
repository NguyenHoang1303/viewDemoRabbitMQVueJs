export const columns = [
    {
        dataIndex: 'productId',
        key: 'productId',
        slots: {title: 'productId'},
        scopedSlots: {customRender: 'productId'},
    },
    {
        title: 'Thumbnail',
        dataIndex: 'thumbnail',
        scopedSlots: {customRender: 'thumbnail'},
        key: 'thumbnail',
        width: '10%'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },

    {
        title: 'UnitPrice',
        dataIndex: 'unitPrice',
        scopedSlots: {customRender: 'unitPrice'},
        key: 'unitPrice',
    },

    {
        title: 'totalPrice',
        dataIndex: 'totalPrice',
        scopedSlots: {customRender: 'totalPrice'},
        key: 'totalPrice',
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: {customRender: 'action'},
    },
];