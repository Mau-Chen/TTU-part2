var dataset_myJob = [
    {
        'id': '1',
        'createDate': "2024-04-25",
        'jobTitle': "System Architect",
        'jobEmployment': "Edinburgh",
        'jobTime': "11:00 ~ 12:00",
        'jobRemoveDate': "2011-06-30",
    },
    {
        'id': '2',
        'createDate': "2011-06-30",
        'jobTitle': "Accountant",
        'jobEmployment': "Tokyo",
        'jobTime': "12:00 ~ 15:00",
        'jobRemoveDate': "2011-06-30",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'jobTitle': "Junior Technical Author",
        'jobEmployment': "San Francisco",
        'jobTime': "13:10 ~ 15:00",
        'jobRemoveDate': "2011-06-25",
    },

];
$(function () {
    
    $('#myJobList').DataTable({
        ...commonSettingsTable,
        "data": dataset_myJob,
        "columns": [
            {
                data: 'id', title: "勾選", render: function (data, type, row, meta) {
                    return '<input type="checkbox" class="form-check-input border-primary" value=' + data + '>'
                },
            },
            { data: 'createDate', title: "刊登日期", },
            { data: 'jobTitle', title: "職務名稱", },
            { data: 'jobEmployment', title: "工作性質", },
            { data: 'jobTime', title: "工作時間", },
            { data: 'jobRemoveDate', title: "截止日期", },
            {
                data: 'id', title: "詳情",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop_' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
                },
            },
            {
                data: 'id', title: "修改",
                render: function (data) {
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./nav-memo2-jobEdit.html" data-id="' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                },
            },
        ],
        "order": [[1, "desc"]],
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
            { searchable: false, orderable: false, targets: [0, 6, 7] },
            { className: "text-nowrap", targets: [1, 4, 5] },
            { className: "text-center", targets: [0, 1, 4, 5, 6, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [1, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
            });
        }
    });

});