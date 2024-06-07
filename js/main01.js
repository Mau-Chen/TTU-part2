$(function () {
    var dataset_myjob = [
        {
            'id': '1',
            'createDate': "2024-04-25",
            'jobTitle': "System Architect",
            'jobEmployment': "Edinburgh",
            'jobTime': "11:00 ~ 12:00",
            'jobRemoveDate': "2011-06-30",

            // '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-info px-1"></i></button>',
            // '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./nav-memo2-jobEdit.html"><i class="fa-solid fa-wrench"></i></a>',


        }

    ];
    $('#jobList, #jobList2, #jobList3, #jobList4, #jobList5').DataTable({
        // "dom": `<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>
        // <'row'<'col-sm-12'tr>>
        // <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>`,
        // dom: '<lf<t>ip>',
        "lengthChange": false,
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
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
                "searchable": true,
            },
            {
                targets: [6],
                orderable: false // 禁止第七列排序
            }
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
        },
        autoWidth: true,
        // responsive: true
    });
    $('#rolesList').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
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
                "searchable": true,
            },
            { "orderable": false, "targets": [5, 6, 7] }
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
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }

    });
    $('#myJobList').DataTable({
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
        "data": dataset_myjob,
        "columns": [
            {
                data: 'id', title: "勾選", render: function (data, type, row, meta) {
                    return '<input type="checkbox" class="form-check-input border-primary" value=' + data + '>'
                }
            },
            { data: 'createDate', title: "刊登日期" },
            { data: 'jobTitle', title: "職務名稱" },
            { data: 'jobEmployment', title: "工作性質" },
            { data: 'jobTime', title: "工作時間" },
            { data: 'jobRemoveDate', title: "截止日期" },
            {
                data: 'jobDetail', title: "詳情",
                render: function (data, type, row, meta) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-info px-1"></i></button>'
                }
            },
            {
                data: 'modify', title: "修改",
                render: function (data, type, row, meta) {
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./nav-memo2-jobEdit.html"><i class="fa-solid fa-wrench"></i></a>'
                }
            },
        ],


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
                targets: [3],
                responsivePriority: 2,
            },
            {
                targets: [6],
            },
            {
                targets: [7],
            },
            { "orderable": false, "targets": [0, 6, 7] },
            { className: 'text-center', "targets": [0, 1, 4, 5, 6, 7] }
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
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }
    });
    $('#venderApplicationList').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
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
            { "orderable": false, "targets": [5] }
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
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }
    });
    $('#cultivationRoom_OpenList').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
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
                targets: [5],
                responsivePriority: 3,
            },
            { "orderable": false, "targets": [5, 6] }
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
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }
    });
    $('#cultivationRoom_CloseList').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
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
                targets: [5],
                responsivePriority: 3,
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
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }
    });
    $('#roomHistoryList,#roomHistoryList2').DataTable({
        responsive: true, // 預設為undefined
        "order": [[0, "desc"]],
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "全部"],
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
            { "orderable": false, "targets": [1, 2, 3, 4, 5, 6, 7, 8] }
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
            oAria: {
                sSortAscending: ": 以升序排列此列",
                sSortDescending: ": 以降序排列此列",
            },
        }
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



// TOP 按鈕 -當畫面滾動時觸發的事件
let btn_up_el = document.getElementById("btn_up");
btn_up_el.addEventListener("click", function () {
    // console.log('aaa');
    let html_el = document.getElementsByTagName("html")[0];
    html_el.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
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

