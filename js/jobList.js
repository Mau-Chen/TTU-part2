var dataset_jobList = [
    {
        'id': '1',
        'createDate': "2024-04-25",
        'company': "Tiger Nixon",
        'jobTitle': "System Architect",
        'jobEmployment': "Edinburgh",
        'jobTime': "11:00 ~ 12:00",
        'jobRemoveDate': "2011-06-30",
    },
    {
        'id': '2',
        'createDate': "2011-06-30",
        'company': "Garrett Winters",
        'jobTitle': "Accountant",
        'jobEmployment': "Tokyo",
        'jobTime': "12:00 ~ 15:00",
        'jobRemoveDate': "2011-06-30",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'company': "Ashton Cox",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '4',
        'createDate': "2009-01-12",
        'company': "Cedric Kelly",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '5',
        'createDate': "2009-01-12",
        'company': "Airi Satou",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '6',
        'createDate': "2009-01-12",
        'company': "Brielle Williamson",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '7',
        'createDate': "2009-01-12",
        'company': "Herrod Chandler",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '8',
        'createDate': "2009-01-12",
        'company': "Rhona Davidson",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '9',
        'createDate': "2009-01-12",
        'company': "Colleen Hurst",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '10',
        'createDate': "2009-01-12",
        'company': "Sonya Frost",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '11',
        'createDate': "2009-01-12",
        'company': "Jena Gaines",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '12',
        'createDate': "2009-01-12",
        'company': "Quinn Flynn",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '13',
        'createDate': "2009-01-12",
        'company': "Charde Marshall",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '14',
        'createDate': "2009-01-12",
        'company': "Haley Kennedy",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '15',
        'createDate': "2009-01-12",
        'company': "Tatyana Fitzpatrick",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },

];
$(function(){

    $('#jobList').DataTable({
        ...commonSettingsTable,
        "data": dataset_jobList,
        "columns": [
            { data: 'createDate', title: "刊登日期", },
            { data: 'company', title: "公司名稱", },
            { data: 'jobTitle', title: "職務名稱", },
            { data: 'jobEmployment', title: "工作性質", },
            { data: 'jobTime', title: "工作時間", },
            { data: 'jobRemoveDate', title: "截止日期", },
            {
                data: 'id', title: "詳情",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop_' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
                }
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
            { searchable: false, orderable: false, targets: [6] },
            { className: "text-nowrap ", targets: [0, 3, 4, 5] },
            { className: "text-center", targets: [0, 3, 4, 5, 6] },

        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(6)', row).css('max-width', '70px');
            $('td:eq(0)', row).css('min-width', '130px');
            [4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
            });
        }
    });
    
});