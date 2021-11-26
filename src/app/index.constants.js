  /* global moment:false */
(function() {
  'use strict';

  angular
    .module('minotaur')
    .constant('moment' , moment)
    .constant('_',window._)
    .constant('L',L)
    .constant('REQUEST_METHOD',{
            GET: "GET",
            POST: "POST",
            PUT: "PUT",
            DELETE: "DELETE"
        })


    .constant('REQUEST_KEY',{

            REQUEST_TYPE: "request_type",
            REQUEST_BY : "request_by",
            REQUESTED_BY :"requested_by",
            COOKIE_HEADERS: "Cookie",
            VIEW_PREVIOUS: "view_previous",
            SESSION_HEADERS: "sessionid",
            WITH_CREDENTIAL_TRUE: true,
            WITH_CREDENTIAL_FALSE: false,
            BRANCH: "branch",
            COURSE: "course",
            SEM: "sem",
            SUBJECT : "subject",
            SUBJECT_TYPE: "subject_type",
            SUB_TYPE: 'sub_type',
            FACULTY:"faculty",
            FORM_DATA:"form_data",
            SEMESTER: "semester",
            FAC_TIME_DEPT : "fac_time_dept",
            FAC_TIME_GROUP_SUBJECT : "fac_time_group_subject",
            FAC_TIME_COURSE : "fac_time_course",
            FAC_TIME_DEPT_MULTI : "fac_get_section_multi",
            GET_SUBJECTS_MULTI_ALL : "get_subjects_multi_all",
            COORDINATOR_SECTION : "coordinator_section",
            GET_SUBJECTS : "get_subjects",
            GET_CO:"get_co",
            GET_DATA:"get_data",
            SUBJECT_ID : "subject_id",
            REQUEST_HOD: "hod",
            SECTION: "section",
            REQUEST_DEAN: "dean",
            DEPARTMENT: "dept",
            DEPT_MULTI: "dept_multi",
            TYPE: 'type',
            VIEW_PRV : "view_previous",
            VIEW : "view",
            ID : "id",
            UNIQ_ID: 'uniq_id',
            FAC_TIME_SEM: "fac_time_sem",
            FAC_TIME_SUBJECT :"fac_time_subject",
            EXAM_NAME : "exam_name",
            DEPT : "dept",
            CO_ID:"co_id",
            DESCRIPTION: "description",
            COORDINATOR_TYPE:"Coordinator_type",
            cOORDINATOR_TYPE: "coordinator_type",
            COORDINATOR_Sem:"Coordinator_sem",
            COORDINATOR_SEM:"coordinator_sem",
            COORDINATOR_SUBJECT:"coordinator_subject",
            CLASS_COORD : "class_coord",
            NBA_COORD:"nba_coordinator",
            COORD_TYPE:"coord_type",
            EXAM_ID : "exam_id",
            GET_SECTION_MULTI:'get_section_multi',
            QUES_PAPER_ID:'ques_paper_id',
            FILTERED_DEPT:"filtered_dept",
            COORDINATOR_BRANCH:"coordinator_branch",
            GET_QUESTIONS : 'get_questions',
            CONSOLIDATE_REPORT : 'CONSOLIDATE_REPORT',
            AVERAGE_REPORT : 'AVERAGE_REPORT',
            UPDATE : 'update',
            DELETE :'delete',
            FILTERED_SEM:'filtered_sem',
            SECTION_ID: 'section_id' ,
            FACUTY_SUBJECT: 'fac_time_subject_multi',
            INTERSECTION_GROUP: 'emp_intersection_group',
            INTRASECTION_GROUP: "emp_intrasection_group",
            ADDRESS: 'address',
            MOBILE: 'mobile',
            MOB: 'mob',
            SEM_FILTER_SUBJECTS:'sem_filter_subjects',
            DEPT_HOD: 'dept_hod',
            SUBJECTS: 'subjects',
            GET_REPORT_DATA: 'get_report_data',
            ATTAIN: 'attain',
            UNIVERSITY_ATTAIN_PER: 'university_attain_per',
            UNIVERSITY_ATTAIN_PER_GET: 'university_attain_per_get',
            ATTAINMENT_PER: 'attainment_per',
            EXAMS: 'exams',
            INPUT_DATA: 'input_data',
            FORM_TYPE: 'form_type',
            GET_ATTAINMENT_LIMIT : "get_attainment_limit",
            USER:'user',
            DIRECT: 'direct',
            INDIRECT: 'indirect',
            INTERNAL:'internal',
            EXTERNAL: 'external',
            SURVEY_ID :'survey_id',
            SEM_ID : 'sem_id',
            FORWARD_TO_HOD: 'forward_to_hod',
            ORG: 'org',
            DEPT1: "department",
            QUESTION:'question',
            EMPLOYEE: 'employee',
            EMP_ID : 'emp_id',
            AMOUNT:'amount',
            ORGANIZATION:'organization',
            ONLOAD:"onload",
            VIEW_PREV:"view_prev",
            REFRESH:"refresh",
            INTERNAL_CAPS:"INTERNAL",
            ISGROUP:"isgroup",
            GET_REPORT_DATA_LAB_NEW:"get_report_data_lab_new",
            SNO :"sno",
            FACT_TIME:'fact_time_subject_type_multu_subject',
            COURSE_ID:'course_id',
            BRANCH_ID:'branch_id',
            STUDENT:'student',
            SUBJECT_MULTI : "subject_multi",
            NEW_SECTION:'new_section',
            OLD_SECTION:'old_section',
            GET_DROPDOWN_DATA:'get_dropdown_data',
        
        })
})();
