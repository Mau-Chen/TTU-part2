let commonSettingsTable = {
    layout: {
        topStart: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        topEnd: null,
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "order": [[0, "desc"]],
    responsive: true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },
};
let commonSettingsHistory = {
    layout: {
        topStart: function () {
            let toolbar = document.createElement('div');
            toolbar.innerHTML = '<h5 class="fw-bold"><i class="fa-solid fa-clock-rotate-left me-2"></i>歷程記錄</h5>';
            return toolbar;
        },
        topEnd: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "columns": [
        { data: 'createDate', title: "紀錄日期" },
        { data: 'squareMeters', title: "坪數" },
        { data: 'rate', title: "服務費", },
        { data: 'startDate', title: "培育開始", },
        { data: 'endDate', title: "培育結束", },
        { data: 'company', title: "培育企業", },
        { data: 'responsiblePerson', title: "企業代表", },
        { data: 'remark', title: "備註", },
        { data: 'createBy', title: "操作者", },
    ],
    "order": [[0, "desc"]],
    "columnDefs": [
        {
            targets: [0],
            responsivePriority: 1,
        },
        {
            targets: [1],
            responsivePriority: 2,
        },
        {
            targets: [2],
            responsivePriority: 3,
        },
        {
            targets: [5],
        },
        { orderable: false, targets: [1, 2, 3, 4, 5, 6, 7, 8] },
        { className: "text-center", targets: [0, 3, 4, 6, 8] },
    ],
    "responsive": true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },
    createdRow: function (row, data, dataIndex) {
        [0, 3, 4, 6, 8].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
        });
        [0, 1, 2, 3, 4].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
        });
        [5, 7].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
        });
        $('td:eq(1)', row).css('min-width', '80px');
    },
};
let commonSettingsProvision = {
    layout: {
        topEnd: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "order": [[0, "desc"]],
    "responsive": true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },

};

$(function () {
    // var dataset_myJob = [
    //     {
    //         'id': '1',
    //         'createDate': "2024-04-25",
    //         'jobTitle': "System Architect",
    //         'jobEmployment': "Edinburgh",
    //         'jobTime': "11:00 ~ 12:00",
    //         'jobRemoveDate': "2011-06-30",
    //     },
    //     {
    //         'id': '2',
    //         'createDate': "2011-06-30",
    //         'jobTitle': "Accountant",
    //         'jobEmployment': "Tokyo",
    //         'jobTime': "12:00 ~ 15:00",
    //         'jobRemoveDate': "2011-06-30",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },

    // ];

    // var dataset_jobList = [
    //     {
    //         'id': '1',
    //         'createDate': "2024-04-25",
    //         'company': "Tiger Nixon",
    //         'jobTitle': "System Architect",
    //         'jobEmployment': "Edinburgh",
    //         'jobTime': "11:00 ~ 12:00",
    //         'jobRemoveDate': "2011-06-30",
    //     },
    //     {
    //         'id': '2',
    //         'createDate': "2011-06-30",
    //         'company': "Garrett Winters",
    //         'jobTitle': "Accountant",
    //         'jobEmployment': "Tokyo",
    //         'jobTime': "12:00 ~ 15:00",
    //         'jobRemoveDate': "2011-06-30",
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'company': "Ashton Cox",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '4',
    //         'createDate': "2009-01-12",
    //         'company': "Cedric Kelly",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '5',
    //         'createDate': "2009-01-12",
    //         'company': "Airi Satou",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '6',
    //         'createDate': "2009-01-12",
    //         'company': "Brielle Williamson",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '7',
    //         'createDate': "2009-01-12",
    //         'company': "Herrod Chandler",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '8',
    //         'createDate': "2009-01-12",
    //         'company': "Rhona Davidson",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '9',
    //         'createDate': "2009-01-12",
    //         'company': "Colleen Hurst",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '10',
    //         'createDate': "2009-01-12",
    //         'company': "Sonya Frost",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '11',
    //         'createDate': "2009-01-12",
    //         'company': "Jena Gaines",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '12',
    //         'createDate': "2009-01-12",
    //         'company': "Quinn Flynn",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '13',
    //         'createDate': "2009-01-12",
    //         'company': "Charde Marshall",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '14',
    //         'createDate': "2009-01-12",
    //         'company': "Haley Kennedy",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },
    //     {
    //         'id': '15',
    //         'createDate': "2009-01-12",
    //         'company': "Tatyana Fitzpatrick",
    //         'jobTitle': "Junior Technical Author",
    //         'jobEmployment': "San Francisco",
    //         'jobTime': "13:10 ~ 15:00",
    //         'jobRemoveDate': "2011-06-25",
    //     },

    // ];

    var dataset_coopManufApp = [
        {
            'id': '1',
            'createDate': "2024-04-25",
            'company': "System Architect",
            'uniformNum': "23456780",
            'companyEmail': "abc@gmail.com",
            'status': "通過",
        },
        {
            'id': '2',
            'createDate': "2011-06-30",
            'company': "Garrett Winters",
            'uniformNum': "83456780",
            'companyEmail': "bcd@gmail.com",
            'status': "通過",
        },
        {
            'id': '3',
            'createDate': "2009-01-12",
            'company': "Ashton Cox",
            'uniformNum': "53456780",
            'companyEmail': "cde@gmail.com",
            'status': "通過",
        },
        {
            'id': '4',
            'createDate': "2012-03-29",
            'company': "Cedric Kelly",
            'uniformNum': "63456780",
            'companyEmail': "def@gmail.com",
            'status': "不通過",
        },
        {
            'id': '5',
            'createDate': "2008-11-28",
            'company': "Airi Satou",
            'uniformNum': "83456780",
            'companyEmail': "efg@gmail.com",
            'status': "待補件",
        },
        {
            'id': '6',
            'createDate': "2012-12-02",
            'company': "Brielle Williamson",
            'uniformNum': "63456780",
            'companyEmail': "fgh@gmail.com",
            'status': "待審核",
        },
        {
            'id': '7',
            'createDate': "2012-08-06",
            'company': "Herrod Chandler",
            'uniformNum': "63453780",
            'companyEmail': "ghi@gmail.com",
            'status': "待補件",
        },
        {
            'id': '8',
            'createDate': "2010-10-14",
            'company': "Rhona Davidson",
            'uniformNum': "63456780",
            'companyEmail': "hij@gmail.com",
            'status': "待補件",
        },
        {
            'id': '9',
            'createDate': "2009-09-15",
            'company': "Colleen Hurst",
            'uniformNum': "63443780",
            'companyEmail': "ijk@gmail.com",
            'status': "通過",
        },
        {
            'id': '10',
            'createDate': "2008-12-13",
            'company': "Sonya Frost",
            'uniformNum': "22443780",
            'companyEmail': "jkl@gmail.com",
            'status': "通過",
        },
        {
            'id': '11',
            'createDate': "2008-12-19",
            'company': "Jena Gaines",
            'uniformNum': "52443780",
            'companyEmail': "klm@gmail.com",
            'status': "待補件",
        },
        {
            'id': '12',
            'createDate': "2013-03-03",
            'company': "Quinn Flynn",
            'uniformNum': "11443780",
            'companyEmail': "lmn@gmail.com",
            'status': "待補件",
        },
        {
            'id': '13',
            'createDate': "2008-10-16",
            'company': "Charde Marshall",
            'uniformNum': "11445380",
            'companyEmail': "mno@gmail.com",
            'status': "待補件",
        },
        {
            'id': '14',
            'createDate': "2012-12-18",
            'company': "Haley Kennedy",
            'uniformNum': "11427380",
            'companyEmail': "nop@gmail.com",
            'status': "通過",
        },
        {
            'id': '15',
            'createDate': "2010-03-17",
            'company': "Tatyana Fitzpatrick",
            'uniformNum': "11445380",
            'companyEmail': "opq@gmail.com",
            'status': "通過",
        },

    ];
    var dataset_rolesList = [
        {
            'id': '1',
            'createDate': "2024-04-25",
            'company': "System Architect",
            'companyEmail': "abc@gmail.com",
            'nowLevel': "系統管理員",
            'status': "1",
        },
        {
            'id': '2',
            'createDate': "2011-06-30",
            'company': "Garrett Winters",
            'companyEmail': "bcd@gmail.com",
            'nowLevel': "廠商商號",
            'status': "0",
        },
        {
            'id': '3',
            'createDate': "2009-01-12",
            'company': "Ashton Cox",
            'companyEmail': "cde@gmail.com",
            'nowLevel': "廠商商號",
            'status': "0",
        },
        {
            'id': '4',
            'createDate': "2012-03-29",
            'company': "Cedric Kelly",
            'companyEmail': "def@gmail.com",
            'nowLevel': "系統專員",
            'status': "0",
        },
        {
            'id': '5',
            'createDate': "2008-11-28",
            'company': "Airi Satou",
            'nowLevel': "廠商商號",
            'companyEmail': "efg@gmail.com",
            'status': "1",
        },
        {
            'id': '6',
            'createDate': "2012-12-02",
            'company': "Brielle Williamson",
            'nowLevel': "廠商商號",
            'companyEmail': "fgh@gmail.com",
            'status': "0",
        },
        {
            'id': '7',
            'createDate': "2012-08-06",
            'company': "Herrod Chandler",
            'nowLevel': "廠商商號",
            'companyEmail': "ghi@gmail.com",
            'status': "1",
        },
        {
            'id': '8',
            'createDate': "2010-10-14",
            'company': "Rhona Davidson",
            'nowLevel': "廠商商號",
            'companyEmail': "hij@gmail.com",
            'status': "1",
        },
        {
            'id': '9',
            'createDate': "2009-09-15",
            'company': "Colleen Hurst",
            'nowLevel': "廠商商號",
            'companyEmail': "ijk@gmail.com",
            'status': "1",
        },
        {
            'id': '10',
            'createDate': "2008-12-13",
            'company': "Sonya Frost",
            'nowLevel': "廠商商號",
            'companyEmail': "jkl@gmail.com",
            'status': "1",
        },
        {
            'id': '11',
            'createDate': "2008-12-19",
            'company': "Jena Gaines",
            'nowLevel': "廠商商號",
            'companyEmail': "klm@gmail.com",
            'status': "1",
        },
        {
            'id': '12',
            'createDate': "2013-03-03",
            'company': "Quinn Flynn",
            'nowLevel': "廠商商號",
            'companyEmail': "lmn@gmail.com",
            'status': "1",
        },
        {
            'id': '13',
            'createDate': "2008-10-16",
            'company': "Charde Marshall",
            'nowLevel': "廠商商號",
            'companyEmail': "mno@gmail.com",
            'status': "1",
        },
        {
            'id': '14',
            'createDate': "2012-12-18",
            'company': "Haley Kennedy",
            'nowLevel': "廠商商號",
            'companyEmail': "nop@gmail.com",
            'status': "1",
        },
        {
            'id': '15',
            'createDate': "2010-03-17",
            'company': "Tatyana Fitzpatrick",
            'nowLevel': "廠商商號",
            'companyEmail': "opq@gmail.com",
            'status': "1",
        },

    ];
    var dataset_cultivationRoomOpen = [
        {
            'id': '1',
            'building': '青創基地',
            'room': '101',
            'company': '馳晶科技股份有限公司',
            'rate': '80,000',
            'status': '已培育',
        },
        {
            'id': '2',
            'building': '綜合工廠培育區',
            'room': 'A4-102',
            'company': '羿安整合行銷股份有限公司',
            'rate': '12,000',
            'status': '已培育',
        },
        {
            'id': '3',
            'building': '挺生大樓培育區',
            'room': '714',
            'company': '博濟施生技股份有限公司',
            'rate': '6,000',
            'status': '已培育',
        },
        {
            'id': '4',
            'building': '產學實驗培育區',
            'room': '101',
            'company': '品庠醫藥生技股份有限公司',
            'rate': '30,000',
            'status': '已培育',
        },
    ];
    var dataset_cultivationRoomClose = [
        {
            'id': '1',
            'carateDate': '2019-01-01',
            'building': '青創基地',
            'room': '101',
            'squareMeters': '10.0',
            'rate': '80,000',
            'closeDate': '2021-01-01',
        },
        {
            'id': '2',
            'carateDate': '2020-05-01',
            'building': '綜合工廠培育區',
            'room': 'A4-102',
            'squareMeters': '9.0',
            'rate': '12,000',
            'closeDate': '2021-05-01',
        },
    ];
    var dataset_roomHistoryList1 = [
        {
            "createDate": "2019-01-19",
            "squareMeters": "56.4",
            "rate": "30,000",
            "startDate": "-",
            "endDate": "-",
            "company": "-",
            "responsiblePerson": "-",
            "remark": "啟用",
            "createBy": "王大明",
        },
        {
            "createDate": "2020-01-20",
            "squareMeters": "56.4",
            "rate": "1,300,000",
            "startDate": "2020-03-01",
            "endDate": "2020-09-30",
            "company": "冠陞企業管理顧問股份有限公司",
            "responsiblePerson": "陳智揚",
            "remark": "-",
            "createBy": "王大明",
        },
        {
            "createDate": "2020-02-20",
            "squareMeters": "56.4",
            "rate": "1,300,000",
            "startDate": "2020-03-01",
            "endDate": "2020-09-30",
            "company": "冠陞企業管理顧問股份有限公司",
            "responsiblePerson": "陳智揚",
            "remark": "一位躺在大門財富也能體驗高速，起點他的。",
            "createBy": "王大明",
        },
    ];
    var dataset_roomHistoryList2 = [
        {
            "createDate": "2019-01-19",
            "squareMeters": "56.4",
            "rate": "30,000",
            "startDate": "-",
            "endDate": "-",
            "company": "-",
            "responsiblePerson": "-",
            "remark": "啟用",
            "createBy": "王大明",
        },
        {
            "createDate": "2019-01-20",
            "squareMeters": "56.4",
            "rate": "30,000",
            "startDate": "2020-03-01",
            "endDate": "2020-09-30",
            "company": "冠陞企業管理顧問股份有限公司",
            "responsiblePerson": "陳智揚",
            "remark": "-",
            "createBy": "王大明",
        },
        {
            "createDate": "2020-05-18",
            "squareMeters": "15.28",
            "rate": "30,000",
            "startDate": "2019-10-01",
            "endDate": "2020-09-30",
            "company": "冠陞企業管理顧問股份有限公司",
            "responsiblePerson": "陳智揚",
            "remark": "-",
            "createBy": "王大明",
        },
    ];
    var dataset_myIDcardHistory = [
        {
            'id': '1',
            'createDate': '2023-08-30',
            'name': '孫一美',
            'jobTitle': '工讀生',
            'startDate': '2023-09-10',
            'endDate': '2023-10-09',
            'place': '青創大樓-201',
            'library': '未申請',
            'status': '已選停用，請至研發處歸還。',
            'print': '1',
        },
        {
            'id': '2',
            'createDate': '2023-08-31',
            'name': '孫大美',
            'jobTitle': '專員',
            'startDate': '2023-09-10',
            'endDate': '2023-10-09',
            'place': '青創大樓-202',
            'library': '已開放',
            'status': '未到期。',
            'print': '-',
        },
        {
            'id': '3',
            'createDate': '2023-09-10',
            'name': '孫大帥',
            'jobTitle': '專員',
            'startDate': '2023-10-11',
            'endDate': '2023-11-30',
            'place': '青創大樓-202',
            'library': '已開放',
            'status': '未到期。',
            'print': '-',
        },
        {
            'id': '4',
            'createDate': '2023-09-10',
            'name': '孫二帥',
            'jobTitle': '專員',
            'startDate': '2023-10-11',
            'endDate': '2023-11-30',
            'place': '青創大樓-202',
            'library': '已開放',
            'status': '已到期，請至研發處延期或歸還。',
            'print': '3',
        },
    ];
    var dataset_myParkingSpaceHistory = [
        {
            'paymentDate': '2024-01-01',
            'type': '汽車',
            'parkingSpaceNum': 'B4-30',
            'name': '陳凱富',
            'licensePlateNum': 'REB-0869',
            'endDate': '2024-02-28',
            'remark': '-',
        },
        {
            'paymentDate': '2024-01-01',
            'type': '機車',
            'parkingSpaceNum': 'B5-1',
            'name': '陳昭嫺',
            'licensePlateNum': ' 8470-N8',
            'endDate': '2024-02-28',
            'remark': '-',
        }
    ];
    var dataset_parkingSpaceApp = [
        {
            'createDate': '2024-07-01',
            'company': '好棒棒股份有限公司',
            'name': '孫小美',
            'type': '汽車',
            'licensePlateNum': '8866-AB',
            'endDate': '2024-08-30',
            'paymentDate': '2024-07-01',
            'status': '已收件，待收費',
            'id': '1',
            'parkingSpaceNum': 'B1-01',
        },
        {
            'createDate': '2024-06-30',
            'company': '好棒棒股份有限公司',
            'name': '孫中美',
            'type': '機車',
            'licensePlateNum': '8GR-000',
            'endDate': '2024-08-30',
            'paymentDate': '2024-01-01',
            'status': '已核准',
            'id': '2',
            'parkingSpaceNum': 'B3-01',
        }
    ];

    var dataset_myContractList = [
        {
            'id': '1',
            'contractType': '培育室',
            'type': '青創',
            'num': '101',
            'endDate': '2024-08-31',
            'paymentDate': '2023-07-15',
            'status': '快到期，快來續約吧！',
        },
    ];

    // let commonSettingsTable = {
    //     layout: {
    //         topStart: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         topEnd: null,
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "order": [[0, "desc"]],
    //     responsive: true,
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },
    // };
    // let commonSettingsHistory = {
    //     layout: {
    //         topStart: function () {
    //             let toolbar = document.createElement('div');
    //             toolbar.innerHTML = '<h5 class="fw-bold"><i class="fa-solid fa-clock-rotate-left me-2"></i>歷程記錄</h5>';
    //             return toolbar;
    //         },
    //         topEnd: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "columns": [
    //         { data: 'createDate', title: "紀錄日期" },
    //         { data: 'squareMeters', title: "坪數" },
    //         { data: 'rate', title: "服務費", },
    //         { data: 'startDate', title: "培育開始", },
    //         { data: 'endDate', title: "培育結束", },
    //         { data: 'company', title: "培育企業", },
    //         { data: 'responsiblePerson', title: "企業代表", },
    //         { data: 'remark', title: "備註", },
    //         { data: 'createBy', title: "操作者", },
    //     ],
    //     "order": [[0, "desc"]],
    //     "columnDefs": [
    //         {
    //             targets: [0],
    //             responsivePriority: 1,
    //         },
    //         {
    //             targets: [1],
    //             responsivePriority: 2,
    //         },
    //         {
    //             targets: [2],
    //             responsivePriority: 3,
    //         },
    //         {
    //             targets: [5],
    //         },
    //         { orderable: false, targets: [1, 2, 3, 4, 5, 6, 7, 8] },
    //         { className: "text-center", targets: [0, 3, 4, 6, 8] },
    //     ],
    //     "responsive": true,
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },
    //     createdRow: function (row, data, dataIndex) {
    //         [0, 3, 4, 6, 8].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
    //         });
    //         [0, 1, 2, 3, 4].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
    //         });
    //         [5, 7].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
    //         });
    //         $('td:eq(1)', row).css('min-width', '80px');
    //     },
    // };
    // let commonSettingsProvision = {
    //     layout: {
    //         topEnd: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "order": [[0, "desc"]],
    //     "responsive": true,
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },

    // };
    // let commonSettingCheckboxProvision = {
    //     layout: {
    //         topEnd: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "order": [[1, "desc"]],
    //     "responsive": true,
    //     responsive: {
    //         details: {
    //             type: 'column',
    //             target: 1
    //         }
    //     },
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },
    //     // createdRow: function (row, data, dataIndex) {
    //     //     $('td:eq(1)', row).addClass('dtr-control');
    //     // },
    // }

    // $('#jobList').DataTable({
    //     ...commonSettingsTable,
    //     "data": dataset_jobList,
    //     "columns": [
    //         { data: 'createDate', title: "刊登日期", },
    //         { data: 'company', title: "公司名稱", },
    //         { data: 'jobTitle', title: "職務名稱", },
    //         { data: 'jobEmployment', title: "工作性質", },
    //         { data: 'jobTime', title: "工作時間", },
    //         { data: 'jobRemoveDate', title: "截止日期", },
    //         {
    //             data: 'id', title: "詳情",
    //             render: function (data) {
    //                 return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop_' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
    //             }
    //         },
    //     ],
    //     "columnDefs": [
    //         {
    //             targets: [0],
    //             responsivePriority: 3,
    //         },
    //         {
    //             targets: [3],
    //             responsivePriority: 1,
    //         },
    //         {
    //             targets: [4],
    //             responsivePriority: 2,
    //         },
    //         { searchable: false, orderable: false, targets: [6] },
    //         { className: "text-nowrap ", targets: [0, 3, 4, 5] },
    //         { className: "text-center", targets: [0, 3, 4, 5, 6] },

    //     ],
    //     createdRow: function (row, data, dataIndex) {
    //         $('td:eq(6)', row).css('max-width', '70px');
    //         $('td:eq(0)', row).css('min-width', '130px');
    //         [4, 5].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
    //         });
    //     }
    // });

    $('#rolesList').DataTable({
        ...commonSettingsTable,
        "data": dataset_rolesList,
        "columns": [
            { data: 'createDate', title: "建立日期", },
            { data: 'company', title: "公司名稱", },
            { data: 'companyEmail', title: "E-mail", },
            { data: 'nowLevel', title: "當前角色", },
            {
                data: 'nowLevel', title: "調整角色",
                render: function (data) {
                    let choose = '';
                    switch (data) {
                        case "系統管理員":
                            choose = '<option value="系統管理員" selected disabled>系統管理員</option><option value="系統專員">系統專員</option><option value="廠商商號">廠商商號</option>';
                            break;
                        case "系統專員":
                            choose = '<option value="系統管理員">系統管理員</option><option value="系統專員" selected disabled>系統專員</option><option value="廠商商號">廠商商號</option>';
                            break;
                        case "廠商商號":
                            choose = '<option value="系統管理員">系統管理員</option><option value="系統專員">系統專員</option><option value="廠商商號" selected disabled>廠商商號</option>';
                            break;
                    }
                    return '<select class="form-select">' + choose + '</select>';
                },
            },
            {
                data: 'status', title: "啟用",
                render: function (data) {
                    if (data == "1") {
                        return '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" checked value="1"></div>'
                    } else {
                        return '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" value="0"></div>'
                    }
                },
            },
            {
                data: 'id', title: "儲存",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-floppy-disk"></i></button>'
                },
            },
        ],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 3,
            },
            {
                targets: [3],
                responsivePriority: 1,
            },
            {
                targets: [4],
                responsivePriority: 2,
            },
            { width: "70px", targets: [5, 6] },
            { searchable: false, orderable: false, targets: [4, 5, 6] },
            { className: "text-nowrap", targets: [0, 2, 3] },
            { className: "text-center", targets: [0, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(4)', row).css('min-width', '150px');
            [0, 3].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });

    // $('#myJobList').DataTable({
    //     ...commonSettingsTable,
    //     "data": dataset_myJob,
    //     "columns": [
    //         {
    //             data: 'id', title: "勾選", render: function (data, type, row, meta) {
    //                 return '<input type="checkbox" class="form-check-input border-primary" value=' + data + '>'
    //             },
    //         },
    //         { data: 'createDate', title: "刊登日期", },
    //         { data: 'jobTitle', title: "職務名稱", },
    //         { data: 'jobEmployment', title: "工作性質", },
    //         { data: 'jobTime', title: "工作時間", },
    //         { data: 'jobRemoveDate', title: "截止日期", },
    //         {
    //             data: 'id', title: "詳情",
    //             render: function (data) {
    //                 return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop_' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
    //             },
    //         },
    //         {
    //             data: 'id', title: "修改",
    //             render: function (data) {
    //                 return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./nav-memo2-jobEdit.html" data-id="' + data + '"><i class="fa-solid fa-wrench"></i></a>'
    //             },
    //         },
    //     ],
    //     "order": [[1, "desc"]],
    //     "columnDefs": [
    //         {
    //             targets: [0],
    //             responsivePriority: 1,
    //         },
    //         {
    //             targets: [2],
    //             responsivePriority: 2,
    //         },
    //         {
    //             targets: [3],
    //             responsivePriority: 2,
    //         },
    //         { searchable: false, orderable: false, targets: [0, 6, 7] },
    //         { className: "text-nowrap", targets: [1, 4, 5] },
    //         { className: "text-center", targets: [0, 1, 4, 5, 6, 7] },
    //     ],
    //     createdRow: function (row, data, dataIndex) {
    //         [0, 6, 7].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
    //         });
    //         [1, 4, 5].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
    //         });
    //     }
    // });

    $('#cooperativeManufacturersApplicationList').DataTable({
        ...commonSettingsTable,
        "data": dataset_coopManufApp,
        "columns": [
            { data: 'createDate', title: "申請日期", },
            { data: 'company', title: "公司名稱", },
            { data: 'uniformNum', title: "統一編號", },
            { data: 'companyEmail', title: "E-mail", },
            { data: 'status', title: "審核進度", },
            {
                data: 'id', title: "檢閱",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#firmDetail_' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
                }, className: 'text-center text-nowrap'
            },
        ],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [3],
                responsivePriority: 2,
            },
            { "searchable": false, "orderable": false, "targets": [5] },
            { "className": "text-nowrap", "targets": [0, 2, 3] },
            { "className": "text-center", "targets": [0, 2, 4, 5] },
        ],
    });

    $('#cultivationRoom_OpenList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoomOpen,
        "columns": [
            { data: 'building', title: "培育區域" },
            { data: 'room', title: "培育室" },
            { data: 'company', title: "培育企業" },
            { data: 'rate', title: "服務費&ensp;/&ensp;月" },
            { data: 'status', title: "當前狀態" },
            {
                data: 'id', title: "詳情",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#openRoom_Details" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
                },
            },
            {
                data: 'id', title: "修改",
                render: function (data) {
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="#" data-id="' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                },
            },
        ],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [1],
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [5],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [5, 6] },
            { "className": "text-nowrap", "targets": [0, 1, 4] },
            { "className": "text-center", "targets": [1, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(0)', row).addClass('ps-3');
            $('td:eq(3)', row).addClass('pe-5');
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
            });
        }
    });

    $('#cultivationRoom_CloseList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoomClose,
        "columns": [
            { data: 'carateDate', title: "培育室<br>建立日期" },
            { data: 'building', title: "培育區域" },
            { data: 'room', title: "培育室" },
            { data: 'squareMeters', title: "可用坪數" },
            { data: 'rate', title: "服務費&ensp;/&ensp;月" },
            { data: 'closeDate', title: "最後停用日" },
            {
                data: 'id', title: "歷史<br>紀錄",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_Details" data-id="' + data + '"><i class="fa-solid fa-clock-rotate-left"></i></button>'
                }, className: 'text-center'
            },
            {
                data: 'id', title: "再次<br>上架",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-arrow-rotate-left"></i></button>'
                }, className: 'text-center'
            },
        ],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [5],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [6, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [0, 2, 3, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 2, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-center');
            });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('pe-5');
            });
            $('td:eq(1)', row).addClass('ps-3').css('min-width', '160px');
        },
    });

    $('#roomHistoryList').DataTable({
        ...commonSettingsHistory,
        "data": dataset_roomHistoryList1,
    });

    $('#roomHistoryList2').DataTable({
        ...commonSettingsHistory,
        "data": dataset_roomHistoryList2
    });

    $('#myIDcardList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>識別證停用後，需歸還至研發處。</h6>';
                return provision;
            },
        },
        "data": dataset_myIDcardHistory,
        "columns": [
            {
                data: 'id', title: "勾選", render: function (data, type, row, meta) {
                    return '<input type="checkbox" class="form-check-input border-primary" value=' + data + '>'
                },
            },
            { data: 'createDate', title: "申請日期" },
            { data: 'name', title: "姓名" },
            { data: 'jobTitle', title: "職稱", },
            { data: 'place', title: "培育室位置", },
            { data: 'startDate', title: "進駐開始", },
            { data: 'endDate', title: "進駐結束", },
            { data: 'library', title: "閱覽<br>圖書館", },
            { data: 'status', title: "狀態", },
            { data: 'print', title: "補發", },
        ],
        "order": [[1, "desc"]],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [1],
                responsivePriority: 2,
            },
            {
                targets: [2],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [0] },
            { className: "text-center", targets: [0, 1, 2, 3, 4, 5, 6, 7, 9] },
        ],
        createdRow: function (row, data, dataIndex) {
            [1, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [1, 2, 4, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            [1, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
            });
            $('td:eq(7)', row).css('max-width', '130px');
        },
    });

    $('#myParkingSpaceList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>若要續用，請於車位到期前申請續約。</h6>';
                return provision;
            },
        },
        "data": dataset_myParkingSpaceHistory,
        "columns": [
            { data: 'paymentDate', title: "付款日", },
            { data: 'type', title: "車位類型", },
            { data: 'parkingSpaceNum', title: "車位號碼", },
            { data: 'name', title: "登記使用人" },
            { data: 'licensePlateNum', title: "車牌號碼", },
            { data: 'endDate', title: "到期日", },
            { data: 'remark', title: "備註", },
        ],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [1],
                responsivePriority: 2,
            },
            {
                targets: [2],
                responsivePriority: 3,
            },
            {
                targets: [6],
                className: "text-start",
            },
            { className: "text-center", targets: [0, 1, 2, 3, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [0, 1, 2, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            $('td:eq(6)', row).css('min-width', '200px');
        },
    });

    $('#parkingSpaceApplicationList').DataTable({
        ...commonSettingsTable,
        "data": dataset_parkingSpaceApp,
        "columns": [
            { data: 'createDate', title: "申請日期" },
            { data: 'company', title: "承租人企業", },
            { data: 'type', title: "車位類型", },
            { data: 'licensePlateNum', title: "車牌號碼", },
            { data: 'parkingSpaceNum', title: "車位號碼", },
            { data: 'endDate', title: "到期日", },
            { data: 'paymentDate', title: "付款日", },
            { data: 'status', title: "審核進度", },
            {
                data: 'id', title: "檢閱",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpaceDetail_' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
                }, className: 'text-center text-nowrap'
            },
        ],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [4],
                responsivePriority: 3,
            },
            {
                targets: [7],
                className: "text-start",
            },
            { searchable: false, orderable: false, targets: [8] },
            { className: "text-center", targets: [2, 3, 4, 5, 6] },
            { className: "text-nowrap", targets: [2, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            // $('td:eq(3)', row).addClass('pe-5');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });

    $('#myContractList').DataTable({
        ...commonSettingsTable,
        "data": dataset_myContractList,
        "columns": [
            // { data: 'createDate', title: "申請日期" },
            // { data: 'company', title: "承租人企業", },
            { data: 'contractType', title: "合約類型" },
            { data: 'type', title: "細項", },
            { data: 'num', title: "號碼", },
            { data: 'endDate', title: "到期日", },
            { data: 'paymentDate', title: "付款日", },
            { data: 'status', title: "狀態", },
            {
                data: 'id', title: "續約",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpaceDetail_' + data + '"><i class="fa-solid fa-handshake-simple"></i></button>'
                }, className: 'text-center text-nowrap'
            },
        ],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [4],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [6] },
            { className: "text-center", targets: [2, 3, 4, 5, 6] },
            { className: "text-nowrap", targets: [2, 3, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            // $('td:eq(6)', row).css('min-width', '70px');
            $('td:eq(6)', row).css('max-width', '70px');
            // $('td:eq(3)', row).addClass('pe-5');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });

    $('#openRoom_Details').on('shown.bs.modal', function () {
        $('#roomHistoryList').DataTable().columns.adjust();
    });
    $('#closeRoom_Details').on('shown.bs.modal', function () {
        $('#roomHistoryList2').DataTable().columns.adjust();
    });



});

//table table-hover table-bordered responsive dataTable dtr-inline
//table table-hover table-bordered responsive dataTable dtr-inline collapsed

/* ::::::::::::::::::::::::::::: 新增/修改職缺 */
//選擇薪資條件變動輸入框
//document.addEventListener('DOMContentLoaded', function () {
//    // 監聽 select 的 change 事件
//    document.getElementById('jobSalary').addEventListener('change', function () {
//        // 取得選擇的選項值
//        var selectedOption = this.value;
//        handleSalaryChoose(selectedOption);
//    });

//    // 取得選擇的選項值
//    var selectedOption = document.getElementById('jobSalary').value;
//    // 初始化時執行判斷
//    handleSalaryChoose(selectedOption);
//});

// 指定id群，加指定class
function addClass(classNames, ids) {
    ids.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            classNames.forEach(function (className) {
                element.classList.add(className);
            });
        }
    });
}

//指定id群，移除指定class
function removeClass(classNames, ids) {
    ids.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            classNames.forEach(function (className) {
                element.classList.remove(className);
            });
        }
    });
}

// 根據選項值顯示相應的薪資選項
function handleSalaryChoose(selectedOption) {
    switch (selectedOption) {
        case '時薪':
        case '日薪':
            addClass(["choose"], ["dollarsItem"]);
            removeClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
            document.getElementById('optionsRadios1').checked = true; // #optionsRadios1 增加 checked 屬性
            break;
        case '月薪':
            addClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem']);
            removeClass(["choose"], ['dollarsPerCaseItem']);
            if (!document.getElementById('optionsRadios2').checked && !document.getElementById('optionsRadios3').checked && !document.getElementById('optionsRadios4').checked) {
                document.getElementById('optionsRadios1').checked = true; // #optionsRadios1 增加 checked 屬性
            }
            break;
        case '按件計酬':
            addClass(["choose"], ['dollarsPerCaseItem']);
            removeClass(["choose"], ["dollarsItem", 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem',]);
            document.getElementById('optionsRadios5').checked = true; // #optionsRadios1 增加 checked 屬性
            break;
        case '請選擇':
            removeClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
            document.getElementById('optionsRadios1', 'optionsRadios2', 'optionsRadios3', 'optionsRadios4', 'optionsRadios5').checked = false; // #optionsRadios1 增加 checked 屬性
            break;
    }
}

//串接薪資區間
function combineInputs() {
    // 檢查 optionsRadios2 是否被選中
    var dollarsToDollars = document.getElementById('optionsRadios2').checked;

    if (dollarsToDollars) {
        // 取得兩個 input 的值
        var firstValue = document.querySelector('.combineInputs:nth-child(1)').value;
        var secondValue = document.querySelector('.combineInputs:nth-child(2)').value;

        // 組合兩個值，用 '~' 連接
        var combinedValue = firstValue + '~' + secondValue;

        // 賦值給 JobSalaryData
        document.querySelector('[name="JobSalaryData"]').value = combinedValue;
    }
}



// ================TOP 按鈕
window.addEventListener("scroll", function () {
    let btnUp = document.querySelector(".top_button");
    if (window.scrollY > 0) {
        // 當畫面不在網頁最頂端時，加上 scroll-animation 類別來套用透明度變化的動畫
        btnUp.classList.add("scroll-animation");
        btnUp.classList.remove("d-none");
    } else {
        // 畫面在網頁最頂端時，移除 scroll-animation 類別
        btnUp.classList.remove("scroll-animation");
        btnUp.classList.add("d-none");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let btn_up_el = document.getElementById("btn_up");
    if (btn_up_el) {
        btn_up_el.addEventListener("click", function () {
            let html_el = document.getElementsByTagName("html")[0];
            html_el.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// ================預覽燈箱
function syncInputValue(inputId, tdId) {
    $('#' + inputId).on('blur', function () {
        var inputValue = $(this).val();
        $('#' + tdId).text(inputValue);
    });
}

function syncInputDate(inputId, tdId_Y, tdId_m, tdId_D) {
    $('#' + inputId).on('blur', function () {
        var inputValue = $(this).val();

        var parts = inputValue.split('-');
        var year = parts[0];
        var month = parts[1];
        var day = parts[2];

        $('#' + tdId_Y).text(year);
        $('#' + tdId_m).text(month);
        $('#' + tdId_D).text(day);
    });
}

function syncSelectValue(selectId, tdgroupId, tdvalueId) {
    $('#' + selectId).on('blur change', function () {
        var selectedOption = $(this).find('option:selected');
        var optionValue = selectedOption.val();
        var optgroupLabel = selectedOption.closest('optgroup').attr('label');

        var changedRoomName = changeRoomName(optgroupLabel);

        $('#' + tdgroupId).text(changedRoomName);
        $('#' + tdvalueId).text(optionValue);
    });
}

function changeRoomName(room) {
    switch (room) {
        case '青創基地':
            return '新德惠';
        case '綜合工廠培育區':
            return '綜合';
        case '挺生大樓培育區':
            return '挺生';
        case '產學實驗培育區':
            return '產學';
        case '實驗大樓培育區':
            return '實驗';
        case '北設工培育區':
            return '北設工';
        case '尚志大樓培育區':
            return '尚志';
        default:
            return '待新增';
    }
}

function checkThisRequired() {
    var inputItem = $(this); // 當前失去焦點的 input 元素
    var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
    // var label = $("label[for='" + inputId + "']").text(); // 獲取與 input 元素相關聯的 label 的文本內容
    var warningBox = $("#danger_" + inputId);
    if (inputItem.val().trim() === '' || inputItem.val() === null) {
        warningBox.text("(-`д´-) 這是必填欄位，請填上歐！").removeClass("d-none");
        allRequiredValid = false;
    } else {
        warningBox.text("").addClass("d-none");
    }
}

function openFile(event) {
    var input = event.target; //取得上傳檔案
    var reader = new FileReader(); //建立FileReader物件
    // var pic_Text = $('#output_text');

    reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

    reader.onload = function () { //FileReader取得上傳檔案後執行以下內容
        var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
        $('#output_img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
        $('#output_text').attr('src', dataURL).hide();
        // $('#output_text').attr('src', dataURL).addClass('opa_0');
    };
}

function openFile2(event) {
    var input = event.target; //取得上傳檔案
    var reader = new FileReader(); //建立FileReader物件

    reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

    reader.onload = function () { //FileReader取得上傳檔案後執行以下內容
        var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
        $('#vehicleRegistratio_img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
    };
}



function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function unformatNumber(str) {
    return str.replace(/,/g, '');
}

// ================審核區域 文字切換輸入
$(function () {
    $('.changeInput_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        // 檢查是否已經有輸入框，避免重複創建
        if ($this.find('input').length === 0) {
            // 建立輸入框
            var $input = $('<input type="text" class="form-control" />').val(currentText);

            // 替換當前文本內容為輸入框
            $this.html($input);

            // 聚焦並選擇輸入框內的文本
            $input.focus().select();

            // 輸入框失去焦點時更新文本內容
            $input.on('blur', function () {
                var newText = $input.val().trim();
                $this.text(newText);
            });

            // 按下 Enter 鍵時也更新文本內容並失去焦點
            $input.on('keypress', function (e) {
                if (e.which === 13) { // Enter 鍵的 keycode 是 13
                    var newText = $input.val().trim();
                    $this.text(newText);
                }
            });
        }
    });

    $('.changeRadio_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        // 檢查是否已經有單選選項，避免重複創建
        if ($this.find('input[type="radio"]').length === 0) {
            var radioOptions = `
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="parkingType" id="car" value="汽車" ${currentText === '汽車' ? 'checked' : ''}>
                    <label class="form-check-label" for="car">汽車</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="parkingType" id="moto" value="機車" ${currentText === '機車' ? 'checked' : ''}>
                    <label class="form-check-label" for="moto">機車</label>
                </div>`;

            // 替換當前文本內容為單選選項
            $this.html(radioOptions);

            // 當選擇新選項並改變選項時，立即更新文本內容
            $this.find('input[type="radio"]').on('change', function () {
                var newText = $(this).val().trim();
                $this.html(newText);
            });

            // 點擊外部時更新文本內容
            $(document).on('click', function (e) {
                if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                    var checkedRadio = $this.find('input[type="radio"]:checked');
                    if (checkedRadio.length) {
                        var newText = checkedRadio.val().trim();
                        $this.html(newText);
                    }
                    $(document).off('click'); // 解除事件綁定
                }
            });
        }
    });

    $('.changeDate_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        console.log('currentText:', currentText); // 打印 currentText 以確認是否成功抓取

        // 檢查是否已經有輸入框，避免重複創建
        if ($this.find('input[type="date"]').length === 0) {
            // 建立日期輸入框
            var $input = $('<input type="date" class="form-control" />').val(currentText);

            // 替換當前文本內容為日期輸入框
            $this.html($input);

            // 聚焦日期輸入框
            $input.focus();

            // 日期輸入框失去焦點時更新文本內容
            $input.on('blur', function () {
                var newText = $input.val().trim();
                if (newText) {
                    $this.text(newText);
                } else {
                    $this.text(currentText);
                }
            });

            // 按下 Enter 鍵時也更新文本內容並失去焦點
            $input.on('keypress', function (e) {
                if (e.which === 13) { // Enter 鍵的 keycode 是 13
                    var newText = $input.val().trim();
                    if (newText) {
                        $this.text(newText);
                    } else {
                        $this.text(currentText);
                    }
                    $input.blur();
                }
            });
        }
    });

    $('.changeMoney_items').on('click', function () {
        var $this = $(this);
        var currentText = unformatNumber($this.text().trim());

        // 檢查是否已經有輸入框，避免重複創建
        if ($this.find('input').length === 0) {
            // 建立數字輸入框
            var $input = $('<input type="text" class="form-control" />').val(currentText);

            // 替換當前文本內容為輸入框
            $this.html($input);

            // 聚焦並選擇輸入框內的文本
            $input.focus().select();

            // 限制輸入框只能輸入數字
            $input.on('input', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
            });

            // 輸入框失去焦點時更新文本內容
            $input.on('blur', function () {
                var newText = formatNumber($input.val().trim());
                if (newText) {
                    $this.text(newText);
                } else {
                    $this.text(formatNumber(currentText));
                }
            });

            // 按下 Enter 鍵時也更新文本內容並失去焦點
            $input.on('keypress', function (e) {
                if (e.which === 13) { // Enter 鍵的 keycode 是 13
                    var newText = formatNumber($input.val().trim());
                    if (newText) {
                        $this.text(newText);
                    } else {
                        $this.text(formatNumber(currentText));
                    }
                    $input.blur();
                }
            });
        }
    });

    $('.changeTextarea_lg_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.html().replace(/<br\s*[\/]?>/gi, '\n').trim();

        // 檢查是否已經有textarea，避免重複創建
        if ($this.find('textarea').length === 0) {
            // 建立textarea
            var $textarea = $('<textarea class="form-control textarea-lg" rows="5"></textarea>').val(currentText);

            // 替換當前文本內容為textarea
            $this.html($textarea);

            // 聚焦並選擇textarea內的文本
            $textarea.focus().select();

            // textarea失去焦點時更新文本內容
            $textarea.on('blur', function () {
                var newText = $textarea.val().trim().replace(/\n/g, '<br>');
                $this.html(newText);
            });

            // 按下 Enter 鍵且同時按下 Ctrl 鍵時也更新文本內容並失去焦點
            $textarea.on('keydown', function (e) {
                if (e.key === 'Enter' && e.ctrlKey) {
                    var newText = $textarea.val().trim().replace(/\n/g, '<br>');
                    $this.html(newText);
                    $textarea.blur();
                }
            });
        }
    });

    $('.changeNumber_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        // 檢查是否已經有輸入框，避免重複創建
        if ($this.find('input').length === 0) {
            // 建立數字輸入框
            var $input = $('<input type="text" class="form-control" />').val(currentText);

            // 替換當前文本內容為輸入框
            $this.html($input);

            // 聚焦並選擇輸入框內的文本
            $input.focus().select();

            // 限制輸入框只能輸入數字
            $input.on('input', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
            });

            // 輸入框失去焦點時更新文本內容
            $input.on('blur', function () {
                var newText = $input.val().trim();
                $this.text(newText);
            });

            // 按下 Enter 鍵時也更新文本內容並失去焦點
            $input.on('keypress', function (e) {
                if (e.which === 13) { // Enter 鍵的 keycode 是 13
                    var newText = formatNumber($input.val().trim());
                    if (newText) {
                        $this.text(newText);
                    } else {
                        $this.text(formatNumber(currentText));
                    }
                    $input.blur();
                }
            });
        }
    });

    $('.changePhone_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        // 檢查是否已經有輸入框，避免重複創建
        if ($this.find('input').length === 0) {
            // 建立輸入框
            var $input = $('<input type="text" class="form-control" />').val(currentText);

            // 替換當前文本內容為輸入框
            $this.html($input);

            // 聚焦並選擇輸入框內的文本
            $input.focus().select();

            // 輸入框失去焦點時更新文本內容
            $input.on('blur', function () {
                var newText = $input.val().trim();
                if (validatePhone(newText)) {
                    $this.text(newText);
                } else {
                    $this.text(currentText); // 恢復原始文本
                    alert('電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX');
                }
            });

            // 限制輸入格式
            $input.on('input', function () {
                var val = $input.val();
                $input.val(val.replace(/[^0-9-]/g, '')); // 只允許輸入數字和 '-'
            });
        }
    });

    $('.changeEmail_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        // 檢查是否已經有輸入框，避免重複創建
        if ($this.find('input').length === 0) {
            // 建立輸入框
            var $input = $('<input type="email" class="form-control" />').val(currentText);

            // 替換當前文本內容為輸入框
            $this.html($input);

            // 聚焦並選擇輸入框內的文本
            $input.focus().select();

            // 輸入框失去焦點時更新文本內容
            $input.on('blur', function () {
                var newText = $input.val().trim();
                newText = convertEmail(newText); // 轉換大寫字母為小寫

                if (validateEmail(newText)) {
                    $this.text(newText);
                } else {
                    $this.text(currentText); // 恢復原始文本
                    alert('請輸入有效的電子郵件地址！');
                }
            });
        }
    });

    $('.changeLineID_items').on('click', function () {
        var $this = $(this);
        var currentText = $this.text().trim();

        // 检查是否已经有输入框，避免重复创建
        if ($this.find('input').length === 0) {
            var $input = $('<input type="text" class="form-control" />').val(currentText);
            $this.html($input);
            $input.focus().select();

            // 失去焦点时更新文本内容
            $input.on('blur', function () {
                var newText = $input.val().trim();
                if (isValidLineID(newText)) {
                    $this.text(newText);
                } else {
                    $this.text(currentText); // 恢复原始文本
                    alert('請輸入有效的LINE ID！');
                }
            });
        }
    });

    // 验证Line ID格式是否有效
    function isValidLineID(lineID) {
        // 允许的字符为半形英数字、点(.)、破折号(-)、下划线(_)和@
        var validChars = /^[a-zA-Z0-9.@_-]+$/;
        return validChars.test(lineID);
    }

    // 驗證電子郵件地址的函數
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 轉換大寫字母為小寫
    function convertEmail(email) {
        var atIndex = email.indexOf('@');
        if (atIndex !== -1) {
            var localPart = email.substring(0, atIndex).toLowerCase();
            var domainPart = email.substring(atIndex);
            return localPart + domainPart;
        }
        return email;
    }

    // 驗證電話格式的函數
    function validatePhone(phone) {
        var phoneRegex = /^\d{2,4}-\d{6,8}$/;
        return phoneRegex.test(phone);
    }


});
