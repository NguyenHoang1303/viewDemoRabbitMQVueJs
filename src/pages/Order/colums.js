export const columns = [
    {
        dataIndex: 'id',
        key: 'id',
        slots: {title: 'id'},
        scopedSlots: {customRender: 'id'},
    },
    {
        title: 'name',
        dataIndex: 'name',
        scopedSlots: {customRender: 'name'},
        key: 'name',
    },
    {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },

    {
        title: 'totalPrice',
        dataIndex: 'totalPrice',
        scopedSlots: {customRender: 'totalPrice'},
        key: 'totalPrice',
    },

    {
        title: 'checkOut',
        dataIndex: 'checkOut',
        scopedSlots: {customRender: 'checkOut'},
        key: 'checkOut',
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: {customRender: 'action'},
    },
];