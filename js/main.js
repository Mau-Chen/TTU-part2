/* ::::::::::::::::::::::::::::: database */
$(document).ready(function () {
    $('#jobList, #jobList2, #jobList3, #jobList4, #jobList5').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 3,
                // orderData: [0]
            },
            {
                targets: [3],
                responsivePriority: 1,
            },
            {
                targets: [4],
                responsivePriority: 2,
            },
            {
                targets: [6],
                orderable: false // 禁止第七列排序
            },
        ],
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
            // order: [[0, "desc"]],
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }

    });
});
$(document).ready(function () {
    $('#rolesList').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 3,
                // orderData: [0]
            },
            {
                targets: [3],
                responsivePriority: 1,
            },
            {
                targets: [4],
                responsivePriority: 2,
            },
            { "orderable": false, "targets": [6, 7] }
        ],
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
            // order: [[0, "desc"]],
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }

    });
});
$(document).ready(function () {
    $('#myJobList').DataTable({
        responsive: true, // 預設為undefined
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
                targets: [6],
                responsivePriority: 2,
            },
            { "orderable": false, "targets": [0, 6, 7] }
        ],
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
            // order: [[0, "desc"]],
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }

    });
});

/* ::::::::::::::::::::::::::::: 新增/修改職缺 */
//===========新增職缺==============
//選擇薪資條件變動輸入框
// document.addEventListener('DOMContentLoaded', function () {
//     //選擇框
//     var jobSalary = document.getElementById('jobSalary');

//     if (jobSalary) {
//         // 監聽 select 的 change 事件
//         jobSalary.addEventListener('change', function () {
//             // 取得選擇的選項值
//             var selectedOption = this.value;

//             // 定義函數來添加class
//             function addClass(classNames, ids) {
//                 ids.forEach(function (id) {
//                     var element = document.getElementById(id);
//                     if (element) {
//                         classNames.forEach(function (className) {
//                             element.classList.add(className);
//                         });
//                     }
//                 });
//             }
//             //定義函數移除class
//             function removeClass(classNames, ids) {
//                 ids.forEach(function (id) {
//                     var element = document.getElementById(id);
//                     if (element) {
//                         classNames.forEach(function (className) {
//                             element.classList.remove(className);
//                         });
//                     }
//                 });
//             }

//             // 根據選項值顯示相應的元素
//             switch (selectedOption) {
//                 case '時薪':
//                 case '日薪':
//                     addClass(["choose"], ["dollarsItem"]);
//                     removeClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
//                     document.getElementById('optionsRadios1').checked = true; // #optionsRadios1 增加 checked 屬性
//                     document.getElementById('optionsRadios1').disabled = false;
//                     document.getElementById('optionsRadios2', 'optionsRadios3', 'optionsRadios4', 'optionsRadios5').disabled = true;
//                     break;
//                 case '月薪':
//                     addClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', "dollarsPerCaseItem"]);
//                     removeClass(["choose"], ['dollarsPerCaseItem']);
//                     document.getElementById('optionsRadios1').checked = true; // #optionsRadios1 增加 checked 屬性
//                     break;
//                 case '按件計酬':
//                     addClass(["choose"], ['dollarsPerCaseItem']);
//                     removeClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', "dollarsItem"]);
//                     document.getElementById('optionsRadios5').checked = true; // #optionsRadios1 增加 checked 屬性
//                     break;
//             }
//         });

//     }


// });
//選擇薪資條件變動輸入框
document.addEventListener('DOMContentLoaded', function () {
    // 監聽 select 的 change 事件
    document.getElementById('jobSalary').addEventListener('change', function () {
        // 取得選擇的選項值
        var selectedOption = this.value;
        handleSalaryChoose(selectedOption);
    });

        // 監聽所有 .ntdInput 的輸入框(防止點擊重填後輸入在不允許的欄位)
        var ntdInputs = document.querySelectorAll('.ntdInput');
        ntdInputs.forEach(function (input) {
            input.addEventListener('focus', function () {
                var selectedOption = document.getElementById('jobSalary').value;
                if (selectedOption === '請選擇') {
                    handleSalaryChoose(selectedOption);
                }
            });
        });

    // 取得選擇的選項值
    var selectedOption = document.getElementById('jobSalary').value;
    // 初始化時執行判斷
    handleSalaryChoose(selectedOption);
});

// 定義函數添加class
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

//定義函數移除class
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

function handleSalaryChoose(selectedOption) {
    // 根據選項值顯示相應的元素
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


//拼湊薪資區間
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

// 建置中通知框
// 網頁載入完成後顯示通知框
window.onload = function () {
    var notification = document.getElementById('underBuilding');
    notification.style.display = 'block';
}

// 關閉通知框
function closeNotification() {
    var notification = document.getElementById('underBuilding');
    notification.style.display = 'none';
}

// 點擊顯示通知框
function openNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
}



// $("#jobList").DataTable({
//     searching: true,
//     sPaginationType: "full_numbers",
//     lengthMenu: [
//         [10, 25, 50, -1],
//         [10, 25, 50, "All"],
//     ],
//     processing: true,
//     serverSide: false,
//     stateSave: true,
//     destroy: true,
//     info: true,
//     autoWidth: false,
//     ordering: false,
//     scrollX: "500px",
//     scrollY: "200px",
//     scrollCollapse: true,
//     paging: false,
//     dom: '<"top">rt<"bottom"><"clear">',
//     ajax: {
//         url: "/demo_datatable?UserID=" + UserIDdata,
//         type: "POST",
//     },
//     columns: [
//         {
//             data: "Line",
//         },
//         {
//             data: "Col_1",
//         },
//         {
//             data: "Col_2",
//         },
//         {
//             data: "Status",
//         },
//     ],
//     language: {
//         lengthMenu: "顯示 _MENU_ 筆資料",
//         sProcessing: "處理中...",
//         sZeroRecords: "没有匹配结果",
//         sInfo: "目前有 _MAX_ 筆資料",
//         sInfoEmpty: "目前共有 0 筆紀錄",
//         sInfoFiltered: " ",
//         sInfoPostFix: "",
//         sSearch: "尋找:",
//         sUrl: "",
//         sEmptyTable: "尚未有資料紀錄存在",
//         sLoadingRecords: "載入資料中...",
//         sInfoThousands: ",",
//         oPaginate: {
//             sFirst: "首頁",
//             sPrevious: "上一頁",
//             sNext: "下一頁",
//             sLast: "末頁",
//         },
//         order: [[0, "desc"]],
//         oAria: {
//             sSortAscending: ": 以升序排列此列",
//             sSortDescending: ": 以降序排列此列",
//         },
//     },
//     columnDefs: [
//         {
//             targets: [2, 3],
//             render: function (data) {
//                 if (data != "無更新") {
//                     //https://momentjs.com/
//                     return moment(data).format("YYYY-MM-DD");
//                 } else {
//                     return data;
//                 }
//             },
//         },
//         {
//             className: "text-center",
//             targets: [0, 1, 2, 3],
//         },
//         {
//             targets: [0],
//             createdCell: function (td, cellData, rowData, row, col) {
//                 $(td).css("word-break", "break-all");
//                 $(td).css("width", "0.5%");
//             },
//         },
//         {
//             targets: [1],
//             createdCell: function (td, cellData, rowData, row, col) {
//                 $(td).css("word-break", "break-all", "text-center");
//                 $(td).css("width", "1%");
//             },
//         },
//         {
//             targets: [2],
//             createdCell: function (td, cellData, rowData, row, col) {
//                 $(td).css("word-break", "break-all");
//                 $(td).css("width", "5%");
//             },
//         },
//         {
//             targets: [3],
//             createdCell: function (td, cellData, rowData, row, col) {
//                 $(td).css("word-break", "break-all");
//                 $(td).css("width", "1%");
//             },
//         },
//     ],
//     rowCallback: function (row, data) {
//         if (data["Status"] == "未完成") {
//             $(row).addClass("danger");
//         } else {
//             $(row).addClass("warning");
//         }
//     },
// });