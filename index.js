const lngs = {
	en: { nativeName: 'English' },
	zh: { nativeName: 'Chinese' },
};

const rerender = () => {
	$('body').localize();
	$('input[name=Chinese_Name]').attr('placeholder', $.t('basic-information.chinese-name.placeholder'));
	$('input[name=English_Name]').attr('placeholder', $.t('basic-information.english-name.placeholder'));
	$('input[name=Nationality_Other]').attr('placeholder', $.t('basic-information.nationality.placeholder'));
	$('input[name=Personal_ID]').attr('placeholder', $.t('basic-information.personal-id.placeholder'));
	$('input[name=Resident_Certificate_No]').attr(
		'placeholder',
		$.t('basic-information.resident-certificate-no.placeholder')
	);
	$('input[name=Work_Permit_Certificate_No]').attr(
		'placeholder',
		$.t('basic-information.work-permit-certificate-no.placeholder')
	);
	$('input[name=Height]').attr('placeholder', $.t('basic-information.height.placeholder'));
	$('input[name=Weight]').attr('placeholder', $.t('basic-information.weight.placeholder'));
	$('input[name=Email]').attr('placeholder', $.t('basic-information.email.placeholder'));
	$('input[name=Mobile_Phone]').attr('placeholder', $.t('basic-information.mobile-phone.placeholder'));
	$('input[name=Contact_Address]').attr('placeholder', $.t('basic-information.contact-address.placeholder'));
	$('input[name=Residence_Address]').attr('placeholder', $.t('basic-information.residence-address.placeholder'));
	$('#Educational_Level_Container input[name=School_Name]').attr(
		'placeholder',
		$.t('educational-level.school-name.placeholder')
	);
	$('#Educational_Level_Container input[name=Major_Subject]').attr(
		'placeholder',
		$.t('educational-level.major-subject.placeholder')
	);
	$('#Job_Experience_Container input[name=Position]').attr('placeholder', $.t('job-experience.position.placeholder'));
	$('#Job_Experience_Container input[name=Company_Name]').attr(
		'placeholder',
		$.t('job-experience.company-name.placeholder')
	);
	$('#Language_Skill_Container input[name=Language]').attr('placeholder', $.t('language-skill.language.placeholder'));
	$('#Recommender_Container input[name=Name]').attr('placeholder', $.t('recommender.name.placeholder'));
	$('#Recommender_Container input[name=Phone]').attr('placeholder', $.t('recommender.phone.placeholder'));
	$('#Recommender_Container input[name=Company_Name]').attr(
		'placeholder',
		$.t('recommender.company-name.placeholder')
	);
	$('#Recommender_Container input[name=Relationship]').attr(
		'placeholder',
		$.t('recommender.relationship.placeholder')
	);
	$('input[name=Available_Time]').attr('placeholder', $.t('other-information.available-time.placeholder'));
	$('input[name=License]').attr('placeholder', $.t('other-information.license.placeholder'));
};

$(document).ready(function () {
	// metadata - favicon
	let link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	link.href = '/favicon.ico';
	// metadata - title
	document.title = 'Jardine Food 履歷表';

	// language
	i18next.use(i18nextBrowserLanguageDetector).init(
		{
			debug: true,
			fallbackLng: 'en',
			resources: {
				en: {
					translation: {
						title: 'Jardine Food Resume',
						'basic-information': {
							heading: 'Basic Information',
							position: {
								title: 'Position',
								placeholder: 'Please select',
								'option-1': 'Full Time',
								'option-2': 'Part Time',
							},
							avatar: {
								title: 'Avatar',
							},
							'chinese-name': {
								title: 'Chinese Name',
								placeholder: 'Please enter your Chinese name',
							},
							'english-name': {
								title: 'English Name',
								placeholder: 'Please enter your English name',
							},
							birthday: {
								title: 'Birthday',
							},
							gender: {
								title: 'Gender',
								placeholder: 'Please select',
								'option-1': 'Male',
								'option-2': 'Female',
								'option-3': 'Other',
							},
							nationality: {
								title: 'Nationality',
								placeholder: 'Please enter your nationality',
								'option-1': 'R.O.C',
								'option-2': 'Other',
							},
							'personal-id': {
								title: 'Personal ID',
								placeholder: 'Please enter your personal ID',
							},
							'resident-certificate-no': {
								title: 'Resident Certificate No.',
								placeholder: 'Please enter your resident certificate no.',
							},
							'resident-certificate-effective-date': {
								title: 'Effective Date',
							},
							'work-permit-certificate-no': {
								title: 'Work Permit Certificate No.',
								placeholder: 'Please enter your work permit certificate no.',
							},
							'work-permit-certificate-effective-date': {
								title: 'Effective Date',
							},
							height: {
								title: 'Height (cm)',
								placeholder: 'Please enter your height',
							},
							weight: {
								title: 'Weight (kg)',
								placeholder: 'Please enter your weight',
							},
							email: {
								title: 'Email',
								placeholder: 'Please enter your email',
							},
							'mobile-phone': {
								title: 'Mobile Phone',
								placeholder: 'Please enter your mobile phone',
							},
							'contact-address': {
								title: 'Contact Address',
								placeholder: 'Please enter your contact address',
							},
							'residence-address': {
								title: 'Residence Address',
								placeholder: 'Please enter your residence address',
								same: 'Same as contact address',
							},
							'driving-license': {
								title: 'Driving License',
								'option-1': 'None',
								'option-2': 'Automobile',
								'option-3': 'Heavy-Duty of Motorcycle',
								'option-4': 'Light-Duty of Motorcycle',
							},
							'recruiting-source': {
								title: 'Recruiting Source',
								'option-1': 'Official Website',
								'option-2': 'Employment Agency',
								'option-3': 'Store Poster',
								'option-4': 'Referral',
								'option-5': 'Headhunting',
							},
						},
						'educational-level': {
							heading: 'Educational Level',
							level: {
								title: 'Educational Stage',
								placeholder: 'Please select',
								'option-1': 'Elementary School',
								'option-2': 'Junior High School',
								'option-3': 'Senior High School',
								'option-4': 'College / University',
								'option-5': 'Graduate School',
							},
							'school-name': {
								title: 'School Name',
								placeholder: 'Please enter your school name',
							},
							'major-subject': {
								title: 'Major Subject',
								placeholder: 'Please enter your major subject',
							},
							'start-date': {
								title: 'Start Date',
							},
							'end-date': {
								title: 'End Date',
							},
							status: {
								title: 'Status',
								placeholder: 'Please select',
								'option-1': 'Graduated',
								'option-2': 'Dropped out',
								'option-3': 'In school',
							},
							button: 'Add Educational Level',
						},
						'job-experience': {
							heading: 'Job Experience',
							position: {
								title: 'Job Position',
								placeholder: 'Please enter your job position',
							},
							'company-name': {
								title: 'Company Name',
								placeholder: 'Please enter your company name',
							},
							'start-date': {
								title: 'Start Date',
							},
							'end-date': {
								title: 'End Date',
							},
							button: 'Add Job Experience',
						},
						'language-skill': {
							heading: 'Language Skill',
							language: {
								title: 'Language',
								placeholder: 'Please enter language',
							},
							option: {
								placeholder: 'Please select',
								'option-1': 'Proficient',
								'option-2': 'Intermediate',
								'option-3': 'Understandable',
							},
							listen: {
								title: 'Listen',
							},
							read: {
								title: 'Read',
							},
							write: {
								title: 'Write',
							},
							speak: {
								title: 'Speak',
							},
							'start-date': {
								title: 'Start Date',
							},
							'end-date': {
								title: 'End Date',
							},
							button: 'Add Language Skill',
						},
						recommender: {
							heading: 'Recommender',
							note: 'If there is a need to fill in the form, the person who completes the form needs to confirm that the recommender has agreed that the following personal information can be provided to Futura Catering by the form filler. Futura Catering can cooperate with the recommendation in the case of inquiries about the work ability performance of the form filler. Contact us for inquiries.',
							name: {
								title: 'Name',
								placeholder: 'Please enter the name',
							},
							phone: {
								title: 'Phone',
								placeholder: 'Please enter the phone',
							},
							'company-name': {
								title: 'Company Name',
								placeholder: 'Please enter the company name',
							},
							relationship: {
								title: 'Relationship',
								placeholder: 'Please enter your relationship',
							},
							button: 'Add Recommender',
						},
						'other-information': {
							heading: 'Other Information',
							'available-time': {
								title: 'Please briefly describe the working hours, for example: Wednesday 8~18, Thursday 6~16, Sunday all day',
								placeholder: 'Please enter your available time',
							},
							license: {
								title: 'Please briefly describe the special vocational or technical training you have received or the relevant licenses you have held',
								placeholder: 'Please enter your license',
							},
							'family-survey': {
								title: 'Do you have family member who work in the catering or fast food industry?',
								'option-1': 'Yes',
								'option-2': 'No',
							},
							'physical-dysfunction': {
								title: 'Physical dysfunction',
								'option-1': 'Yes',
								'option-2': 'No',
							},
							'disabled-employment': {
								title: 'According to the laws and regulations, companies need to declare when employing disabled employees. Are you willing to provide handbooks for the use of the company?',
								'option-1': 'Willing',
								'option-2': 'Unwilling',
							},
						},
						consent: {
							1: 'About the above information which the applicant provided, the Company could use it for personnel management on the basis of recruitment, filing and contacting in the duration of the employment agreement.',
							2: 'According to the Article 7 of Labor Standards Act, if the Company recruits the applicant, it shall retain the above information until the five years after the resignation.',
							3: 'If the Company decides not to recruit the applicant, it shall destroy the above information after one year from collecting.',
							4: 'If you need to look up, copy, add, correct or ask to stop collecting, handling and using the above information, you may contact the Company.',
							5: 'I authorize investigation of all statements contained in this form and understand that any false statements made herein will be sufficient cause of termination.',
							6: 'I agree to review the contents of this form, if there is any false report, I am willing to be dismissed.',
						},
						button: {
							clear: 'Clear',
							submit: 'Submit',
						},
						footer: 'All rights reserved © 2023 Jardine Restaurant Group',
					},
				},
				zh: {
					translation: {
						title: 'Jardine Food 履歷表',
						'basic-information': {
							heading: '基本資訊',
							position: {
								title: '應徵職位',
								placeholder: '請選擇',
								'option-1': '全職',
								'option-2': '兼職',
							},
							avatar: {
								title: '大頭照',
							},
							'chinese-name': {
								title: '中文姓名',
								placeholder: '請輸入中文姓名',
							},
							'english-name': {
								title: '英文姓名',
								placeholder: '請輸入英文姓名',
							},
							birthday: {
								title: '出生日期',
							},
							gender: {
								title: '性別',
								placeholder: '請選擇',
								'option-1': '男',
								'option-2': '女',
								'option-3': '其他',
							},
							nationality: {
								title: '國籍',
								placeholder: '請輸入國籍',
								'option-1': '中華民國',
								'option-2': '其他',
							},
							'personal-id': {
								title: '國民身份證字號',
								placeholder: '請輸入身份證字號',
							},
							'resident-certificate-no': {
								title: '居留證字號',
								placeholder: '請輸入居留證字號',
							},
							'resident-certificate-effective-date': {
								title: '有效日期',
							},
							'work-permit-certificate-no': {
								title: '工作許可字號',
								placeholder: '請輸入工作許可字號',
							},
							'work-permit-certificate-effective-date': {
								title: '有效日期',
							},
							height: {
								title: '身高（公分）',
								placeholder: '請輸入身高',
							},
							weight: {
								title: '體重（公斤）',
								placeholder: '請輸入體重',
							},
							email: {
								title: '電子郵件',
								placeholder: '請輸入電子郵件',
							},
							'mobile-phone': {
								title: '行動電話',
								placeholder: '請輸入行動電話',
							},
							'contact-address': {
								title: '通訊地址',
								placeholder: '請輸入通訊地址',
							},
							'residence-address': {
								title: '戶籍地址',
								placeholder: '請輸入戶籍地址',
								same: '同通訊地址',
							},
							'driving-license': {
								title: '駕照',
								'option-1': '無',
								'option-2': '汽車',
								'option-3': '普通重型機車',
								'option-4': '普通輕型機車',
							},
							'recruiting-source': {
								title: '招募訊息來源',
								'option-1': '官網',
								'option-2': '人力銀行',
								'option-3': '店家海報',
								'option-4': '親友介紹',
								'option-5': '獵人頭',
							},
						},
						'educational-level': {
							heading: '教育程度',
							level: {
								title: '教育階段',
								placeholder: '請選擇',
								'option-1': '國小',
								'option-2': '國中',
								'option-3': '高中職',
								'option-4': '大學',
								'option-5': '研究所',
							},
							'school-name': {
								title: '學校名稱',
								placeholder: '請輸入學校名稱',
							},
							'major-subject': {
								title: '主修科系',
								placeholder: '請輸入主修科系',
							},
							'start-date': {
								title: '開始日期',
							},
							'end-date': {
								title: '結束日期',
							},
							status: {
								title: '狀態',
								placeholder: '請選擇',
								'option-1': '畢業',
								'option-2': '肄業',
								'option-3': '就學中',
							},
							button: '新增教育程度',
						},
						'job-experience': {
							heading: '工作經歷',
							position: {
								title: '工作職稱',
								placeholder: '請輸入工作職稱',
							},
							'company-name': {
								title: '公司名稱',
								placeholder: '請輸入公司名稱',
							},
							'start-date': {
								title: '開始日期',
							},
							'end-date': {
								title: '結束日期',
							},
							button: '新增工作經歷',
						},
						'language-skill': {
							heading: '語言能力',
							language: {
								title: '語言',
								placeholder: '請輸入語言',
							},
							option: {
								placeholder: '請選擇',
								'option-1': '精通',
								'option-2': '中等',
								'option-3': '略懂',
							},
							listen: {
								title: '聽',
							},
							read: {
								title: '讀',
							},
							write: {
								title: '寫',
							},
							speak: {
								title: '說',
							},
							'start-date': {
								title: '開始日期',
							},
							'end-date': {
								title: '結束日期',
							},
							button: '新增語言能力',
						},
						recommender: {
							heading: '推薦人',
							note: '如有填寫需求，填表人需確認，推薦人已同意其以下個人資料得由填表人提供予富利餐飲，富利餐飲於查詢填表人之工作能力表現等相關需求下，得與推薦人聯絡查詢。',
							name: {
								title: '姓名',
								placeholder: '請輸入姓名',
							},
							phone: {
								title: '電話',
								placeholder: '請輸入電話',
							},
							'company-name': {
								title: '公司名稱',
								placeholder: '請輸入公司名稱',
							},
							relationship: {
								title: '關係',
								placeholder: '請輸入關係',
							},
							button: '新增推薦人',
						},
						'other-information': {
							heading: '其他資訊',
							'available-time': {
								title: '請簡述可上班時段，例如：星期三8~18、星期四6~16、星期日整天',
								placeholder: '請簡述可上班時段',
							},
							license: {
								title: '請簡述所受之特殊職業或技術訓練或持有之相關執照',
								placeholder: '請簡述執照',
							},
							'family-survey': {
								title: '您是否有親人在餐飲或速食業工作？',
								'option-1': '是',
								'option-2': '否',
							},
							'physical-dysfunction': {
								title: '身體機能障礙',
								'option-1': '是',
								'option-2': '否',
							},
							'disabled-employment': {
								title: '依照法令規定企業進用身心障礙員工需做申報，是否願意提供身障手冊為公司之用',
								'option-1': '願意',
								'option-2': '不願意',
							},
						},
						consent: {
							1: '就應徵者所提供之上開資料，本公司基於人力資源規劃之徵才需要，為人事行政管理之用，且於錄取後將於雙方勞雇關係存續期間作為員工資料建檔、聯繫之用。',
							2: '若為本公司錄取，依據勞動基準法第 7 條規定，上開資料本公司得保留至應徵者離職後五年。',
							3: '若未獲本公司錄取，上開資料本公司將於蒐集日起一年後銷毀。',
							4: '就上開資料若有需要查詢閱覽、請求複製本、補充或更正資料、請求停止蒐集、處理或利用得與本公司聯繫。',
							5: '若為本公司錄取，本公司將提供您的個人相關資料予保險公司，做為「員工團體綜合保險」投保之用。',
							6: '本人允許審查本表內所填各項內容，如有虛報情事願受解職處分。',
						},
						button: {
							clear: '清除',
							submit: '送出',
						},
						footer: 'All rights reserved © 2023 Jardine Restaurant Group',
					},
				},
			},
		},
		(err, t) => {
			if (err) return console.error(err);

			jqueryI18next.init(i18next, $, { useOptionsAttr: true });

			$('.lang-btn').click(() => {
				const chosenLng = i18next.resolvedLanguage === 'en' ? 'zh' : 'en';
				i18next.changeLanguage(chosenLng, () => {
					rerender();
				});
			});

			rerender();
		}
	);

	// Query auto fill in
	const getQueryVariable = variable => {
		let query = window.location.search.substring(1);
		let vars = query.split('&');
		for (let i = 0; i < vars.length; i++) {
			let pair = vars[i].split('=');
			if (decodeURIComponent(pair[0]) == variable) {
				return decodeURIComponent(pair[1]);
			}
		}
	};

	const Shop_ID = getQueryVariable('shop_id') || '';
	// $('#Shop_ID').val(Shop_ID);
	// $('#Today').html(dayjs().format('YYYY/MM/DD'));

	// Init Form Value
	let applicationForm = {
		Position: { value: '', valid: true, error: '' },
		Chinese_Name: { value: '', valid: true, error: '' },
		English_Name: { value: '', valid: true, error: '' },
		Birthday: { value: '', valid: true, error: '' },
		Gender: { value: '', valid: true, error: '' },
		Nationality: { value: '', valid: true, error: '' },
		Personal_ID: { value: '', valid: true, error: '' },
		Resident_Certificate_No: { value: '', valid: true, error: '' },
		Resident_Certificate_Effective_Date: { value: '', valid: true, error: '' },
		Work_Permit_Certificate_No: { value: '', valid: true, error: '' },
		Work_Permit_Certificate_Effective_Date: { value: '', valid: true, error: '' },
		Email: { value: '', valid: true, error: '' },
		Mobile_Phone: { value: '', valid: true, error: '' },
		Contact_Address: { value: '', valid: true, error: '' },
		Residence_Address: { value: '', valid: true, error: '' },
		Driving_License: { value: '', valid: true, error: '' },
		Recruiting_Source: { value: '', valid: true, error: '' },
		Educational_Level: [
			{
				Level: { value: '', valid: true, error: '' },
				School_Name: { value: '', valid: true, error: '' },
				Major_Subject: { value: '', valid: true, error: '' },
				Start_Date: { value: '', valid: true, error: '' },
				End_Date: { value: '', valid: true, error: '' },
				Status: { value: '', valid: true, error: '' },
			},
		],
		Job_Experience: [
			{
				Position: { value: '', valid: true, error: '' },
				Company_Name: { value: '', valid: true, error: '' },
				Start_Date: { value: '', valid: true, error: '' },
				End_Date: { value: '', valid: true, error: '' },
			},
		],
		Language_Skill: [
			{
				Language: { value: '', valid: true, error: '' },
				Listen: { value: '', valid: true, error: '' },
				Read: { value: '', valid: true, error: '' },
				Write: { value: '', valid: true, error: '' },
				Speak: { value: '', valid: true, error: '' },
			},
		],
		Recommender: [
			{
				Name: { value: '', valid: true, error: '' },
				Phone: { value: '', valid: true, error: '' },
				Company_Name: { value: '', valid: true, error: '' },
				Relationship: { value: '', valid: true, error: '' },
			},
		],
		Available_Time: { value: '', valid: true, error: '' },
		License: { value: '', valid: true, error: '' },
		Family_Survey: { value: '', valid: true, error: '' },
		Physical_Dysfunction: { value: '', valid: true, error: '' },
		Disabled_Employment: { value: '', valid: true, error: '' },
	};

	const handleOnChange = ({ key, order, subKey = [], type = 'text' }) => {
		if (type === 'text') {
			$(`#${key}`).change(e => (applicationForm[key].value = e.target.value));
		} else if (type === 'array') {
			subKey.forEach(_key => {
				$(`#${key}_${order} .${_key}`).change(
					e => (applicationForm[key][applicationForm[key].length - 1][_key].value = e.target.value)
				);
			});
		} else if (type === 'radio') {
			$(`#${key} input[name=${key}_Option]`).change(e => (applicationForm[key].value = e.target.value));
		}
	};

	(function () {
		handleOnChange({ key: 'Position' });
		handleOnChange({ key: 'Chinese_Name' });
		handleOnChange({ key: 'English_Name' });
		handleOnChange({ key: 'Birthday' });
		handleOnChange({ key: 'Gender' });
		handleOnChange({ key: 'Nationality' });
		handleOnChange({ key: 'Personal_ID' });
		handleOnChange({ key: 'Resident_Certificate_No' });
		handleOnChange({ key: 'Resident_Certificate_Effective_Date' });
		handleOnChange({ key: 'Work_Permit_Certificate_No' });
		handleOnChange({ key: 'Work_Permit_Certificate_Effective_Date' });
		handleOnChange({ key: 'Email' });
		handleOnChange({ key: 'Mobile_Phone' });
		handleOnChange({ key: 'Contact_Address' });
		handleOnChange({ key: 'Residence_Address' });
		handleOnChange({ key: 'Driving_License' });
		handleOnChange({ key: 'Recruiting_Source' });
		handleOnChange({
			key: 'Educational_Level',
			order: 1,
			subKey: ['Level', 'School_Name', 'Major_Subject', 'Start_Date', 'End_Date', 'Status'],
			type: 'array',
		});
		handleOnChange({
			key: 'Job_Experience',
			order: 1,
			subKey: ['Position', 'Company_Name', 'Start_Date', 'End_Date'],
			type: 'array',
		});
		handleOnChange({
			key: 'Language_Skill',
			order: 1,
			subKey: ['Language', 'Listen', 'Read', 'Write', 'Speak'],
			type: 'array',
		});
		handleOnChange({
			key: 'Recommender',
			order: 1,
			subKey: ['Name', 'Phone', 'Company_Name', 'Relationship'],
			type: 'array',
		});
		handleOnChange({ key: 'Available_Time' });
		handleOnChange({ key: 'License' });
		handleOnChange({ key: 'Family_Survey' });
		handleOnChange({ key: 'Physical_Dysfunction' });
		handleOnChange({ key: 'Disabled_Employment', type: 'radio' });
	})();

	// File Uploader & Submit API
	let avatarPreview;

	const postApplication = async () => {
		console.log('applicationForm', applicationForm);
		const formUrl =
			'https://prod-10.southeastasia.logic.azure.com/workflows/bf73a6c4817c4d639f9e83cdf50915bc/triggers/manual/paths/invoke/application?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sOVRaWpb4ZWO5VVEvsFrFpVTzDe2XXmZE63Ft9OZmuo';
		const applicationMainUrl =
			'https://prod-09.southeastasia.logic.azure.com/workflows/f395f01fd09948c8ad5db65e57ee50c1/triggers/manual/paths/invoke/application?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mD9AW1HLoxfjxPqJnOj9_mNz-j-PkRpxP7B3fpSK7jg';
		const flowLogUrl =
			'https://prod-61.southeastasia.logic.azure.com/workflows/46e3886422274f63a9f52aff88431ffd/triggers/manual/paths/invoke/application?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lhAFFC9CNF_UFhDyF1tB1n48HtoXZcAuU5sarR8TnWs';
		try {
			const Application_Main_SN = `AM-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Hire_Main_Table_SN = `HM-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Hire_Education_Form_SN = `HE-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Hire_Work_Experience_Form_SN = `HWE-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Hire_Langauge_SN = `HL-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Hire_Recommander_SN = `HR-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Flow_Log_SN = `FLS-${dayjs().format('YYYYMMDDHHmmss')}`;
			const flowMappingTable = {
				// 本籍 PT
				'local-pt': {
					Flow: 2,
					Flow_SN: 'FW-20230723161118596',
					Current_CheckPoint: 1,
					Current_CheckPoint_SN: 'CP-20230724104913964',
				},
				// 本籍 FT
				'local-ft': {
					Flow: 4,
					Flow_SN: 'FW-20230723162413887',
					Current_CheckPoint: 7,
					Current_CheckPoint_SN: 'CP-20230724105544536',
				},
				// 外籍 PT
				'overseas-pt': {
					Flow: 5,
					Flow_SN: 'FW-20230723162450266',
					Current_CheckPoint: 9,
					Current_CheckPoint_SN: 'CP-20230724105639249',
				},
				// 外籍 FT
				'overseas-ft': {
					Flow: 3,
					Flow_SN: 'FW-20230723162355222',
					Current_CheckPoint: 3,
					Current_CheckPoint_SN: 'CP-20230724105355240',
				},
			};

			let formBody = {
				// System
				Hire_Main_Table_SN,
				Form_List: 1,
				Form_List_SN: 'FM-20230731152831892',
				Flow: flowMappingTable['local-pt'].Flow,
				Flow_SN: flowMappingTable['local-pt'].Flow_SN,

				// Form
				Position: applicationForm.Position.value,
				Store_Name: Shop_ID,
				Chinese_Name: applicationForm.Chinese_Name.value,
				English_Name: applicationForm.English_Name.value,
				Birthday: applicationForm.Birthday.value,
				Gender: applicationForm.Gender.value,
				Nationality:
					applicationForm.Nationality.value === 'Other'
						? $('#Nationality_Other').val()
						: applicationForm.Nationality.value,
				Personal_ID: applicationForm.Personal_ID.value,
				Residence_Card_Number: applicationForm.Resident_Certificate_No.value,
				Residence_Valid_Date: applicationForm.Resident_Certificate_Effective_Date.value,
				Work_ID: applicationForm.Work_Permit_Certificate_No.value,
				Work_Valid_Date: applicationForm.Work_Permit_Certificate_Effective_Date.value,
				CellPhone_Number: applicationForm.Mobile_Phone.value,
				Email: applicationForm.Email.value,
				Mailing_Address: applicationForm.Contact_Address.value,
				Residence_Address: applicationForm.Residence_Address.value,
				Car_License: applicationForm.Driving_License.value,
				Working_Hour: applicationForm.Available_Time.value,
				Other_License: applicationForm.License.value,
				Working_Relative: applicationForm.Family_Survey.value,
				Disabled: applicationForm.Physical_Dysfunction.value,
				Disabled_Applyment: applicationForm.Disabled_Employment.value,
				Recruiting_Source: applicationForm.Recruiting_Source.value,

				// Children
				Educational_Level: applicationForm.Educational_Level.map(data => ({
					Hire_Education_Form_SN,
					Hire_Main_Table_SN,
					Grade: data.Level.value,
					School_Name: data.School_Name.value,
					Major: data.Major_Subject.value,
					StartDate: data.Start_Date.value,
					EndDate: data.End_Date.value,
					Graduated: data.Status.value,
				})),
				Job_Experience: applicationForm.Job_Experience.map(data => ({
					Hire_Work_Experience_Form_SN,
					Hire_Main_Table_SN,
					Job_Title: data.Position.value,
					Name_Of_Org: data.Company_Name.value,
					StartDate: data.Start_Date.value,
					EndDate: data.End_Date.value,
				})),
				Language_Skill: applicationForm.Language_Skill.map(data => ({
					Hire_Langauge_SN,
					Hire_Main_Table_SN,
					Language: data.Language.value,
					Listen: data.Listen.value,
					Read: data.Read.value,
					Write: data.Write.value,
					Speak: data.Speak.value,
				})),
				Recommender: applicationForm.Recommender.map(data => ({
					Hire_Recommander_SN,
					Hire_Main_Table_SN,
					Name: data.Name.value,
					Phone: data.Phone.value,
					Company_Name: data.Company_Name.value,
					Relationship: data.Relationship.value,
				})),

				// Other
				Profile: avatarPreview?.content,
			};
			let applicationMainBody = {
				Application_Main_SN,
				Form_Record_SN: Hire_Main_Table_SN,
				Form_List: 1,
				Form_List_SN: 'FM-20230731152831892',
				Flow: flowMappingTable['local-pt'].Flow,
				Flow_SN: flowMappingTable['local-pt'].Flow_SN,
				Requester: 3,
				Requester_Name: 'Matthew Lee',
				Requester_SN: 'U-202307181728249',
				Requester_Mail: 'matthew.lee@sftwo.onmicrosoft.com',
				Current_CheckPoint: flowMappingTable['local-pt'].Current_CheckPoint,
				Current_CheckPoint_SN: flowMappingTable['local-pt'].Current_CheckPoint_SN,
				Submitted_Datetime: dayjs(),
			};
			let flowLogBody = {
				Flow_Log_SN,
				Form_List: 1,
				Form_List_SN: 'FM-20230731152831892',
				Application_Main_SN,
				Form_Record_SN: Hire_Main_Table_SN,
				CheckPoint: flowMappingTable['local-pt'].Current_CheckPoint,
				CheckPoint_SN: flowMappingTable['local-pt'].Current_CheckPoint_SN,
				User: 3,
				User_SN: 'U-202307181728249',
				User_Mail: 'matthew.lee@sftwo.onmicrosoft.com',
				Start_Datetime: dayjs(),
			};
			console.log(formBody);
			console.log(applicationMainBody);
			console.log(flowLogBody);
			let formResponse = await fetch(formUrl, {
				body: JSON.stringify(formBody),
				headers: {
					'user-agent': 'Mozilla/4.0 MDN Example',
					'content-type': 'application/json',
				},
				method: 'POST',
			});
			let applicationMainResponse = await fetch(applicationMainUrl, {
				body: JSON.stringify(applicationMainBody),
				headers: {
					'user-agent': 'Mozilla/4.0 MDN Example',
					'content-type': 'application/json',
				},
				method: 'POST',
			});
			let applicationMainResponseData = await applicationMainResponse.json();
			console.log(applicationMainResponseData);
			let flowLogResponse = await fetch(flowLogUrl, {
				body: JSON.stringify({
					...flowLogBody,
					Application_Main: applicationMainResponseData,
				}),
				headers: {
					'user-agent': 'Mozilla/4.0 MDN Example',
					'content-type': 'application/json',
				},
				method: 'POST',
			});
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	};

	$('#Avatar').on('change', function () {
		let file = $(this);
		let avatarReader = new FileReader();
		avatarReader.onload = function (e) {
			avatarPreview = {
				name: file.prop('files')[0].name,
				'content-type': file.prop('files')[0].type,
				content: e.target.result,
			};
			console.log(avatarPreview);
			$('.defualt-img').addClass('w-full object-cover opacity-100');
			$('.defualt-img').attr('src', avatarPreview.content);
		};
		avatarReader.onloadend = function (e) {
			console.log(e.target.result);
		};
		avatarReader.onerror = function (e) {
			console.error(e.target.error);
		};
		avatarReader.readAsDataURL(file.prop('files')[0]);
	});

	// Clear Form Error
	const clear = data => ({
		...data,
		valid: true,
		error: '',
	});

	const clearData = (data, keyArray) => {
		const newData = { ...data };
		for (let index = 0; index < keyArray.length; index += 1) {
			newData[keyArray[index]] = clear(newData[keyArray[index]]);
			$(`#${keyArray[index]}`).removeClass('border-red-500');
			$(`#${keyArray[index]}_Error`).html('');
		}
		return newData;
	};

	const clearChildrenData = (data, keyArray) => {
		const newData = { ...data };
		for (let index = 0; index < keyArray.length; index += 1) {
			newData[keyArray[index]] = clear(newData[keyArray[index]]);
			$(`.${keyArray[index]}`).removeClass('border-red-500');
			$(`.${keyArray[index]}_Error`).html('');
		}
		return newData;
	};

	const clearFormError = data => {
		console.log('error', data);
		const newData = clearData(
			_.omit(data, ['Educational_Level', 'Job_Experience', 'Language_Skill', 'Recommender']),
			[
				'Position',
				'Chinese_Name',
				'English_Name',
				'Birthday',
				'Gender',
				'Nationality',
				'Personal_ID',
				'Resident_Certificate_No',
				'Resident_Certificate_Effective_Date',
				'Work_Permit_Certificate_No',
				'Work_Permit_Certificate_Effective_Date',
				'Email',
				'Mobile_Phone',
				'Contact_Address',
				'Residence_Address',
				'Driving_License',
				'Recruiting_Source',
				'Available_Time',
				'License',
				'Family_Survey',
				'Physical_Dysfunction',
				'Disabled_Employment',
			]
		);
		const edu = data.Educational_Level.map(_emp =>
			clearChildrenData(_emp, ['Level', 'School_Name', 'Major_Subject', 'Start_Date', 'End_Date', 'Status'])
		);
		const job = data.Job_Experience.map(_emp =>
			clearChildrenData(_emp, ['Position', 'Company_Name', 'Start_Date', 'End_Date'])
		);
		const lng = data.Language_Skill.map(_emp =>
			clearChildrenData(_emp, ['Language', 'Listen', 'Read', 'Write', 'Speak'])
		);
		const rcm = data.Recommender.map(_emp =>
			clearChildrenData(_emp, ['Name', 'Phone', 'Company_Name', 'Relationship'])
		);

		return { ...newData, Educational_Level: edu, Job_Experience: job, Language_Skill: lng, Recommender: rcm };
	};

	// Validate Form
	const isExist = value => value !== null && value !== '' && typeof value !== 'undefined';
	const isEmpty = value => !isExist(value);

	const examValue = (data, keyValue) => ({
		value: keyValue.every(key => isExist(data[key].value)),
		notValid: keyValue.filter(key => isEmpty(data[key].value)),
	});

	const examSingleValue = (name, data, keyValue) => {
		console.log(name, data, keyValue);
		return {
			value: keyValue.every(key => isExist(data[key])),
			notValid: !keyValue.every(key => isExist(data[key])) ? [name] : [],
		};
	};

	const examFormData = data => {
		console.log(data);
		const valueResult = examValue(data, [
			'Position',
			'Chinese_Name',
			'English_Name',
			'Birthday',
			'Gender',
			'Nationality',
			'Personal_ID',
			'Resident_Certificate_No',
			'Resident_Certificate_Effective_Date',
			'Work_Permit_Certificate_No',
			'Work_Permit_Certificate_Effective_Date',
			'Email',
			'Mobile_Phone',
			'Contact_Address',
			'Residence_Address',
			'Driving_License',
			'Recruiting_Source',
			'Available_Time',
			'License',
			'Family_Survey',
			'Physical_Dysfunction',
			'Disabled_Employment',
		]);
		const eduResult = data.Educational_Level.map(edu =>
			examValue(edu, ['Level', 'School_Name', 'Major_Subject', 'Start_Date', 'End_Date', 'Status'])
		);
		console.log(valueResult, eduResult);

		return {
			value: valueResult.value,
			notValid: valueResult.notValid,
			eduValue: eduResult.every(({ value }) => value),
			eduNotValid: eduResult.map(res => [...res.notValid]),
		};
	};

	// Submit
	$('#submit-form-btn').click(async () => {
		let errorStatus = false;
		const avatar = $('#Avatar').prop('files')[0];

		// Clear Validation
		// applicationForm = clearFormError(applicationForm);

		// // Validate
		// const validateData = examFormData(applicationForm);
		// console.log('validateData', validateData);
		// if (!validateData.value) {
		// 	validateData.notValid.forEach(key => {
		// 		applicationForm[key].valid = false;
		// 		applicationForm[key].error = '此欄位不得空白';
		// 		$(`#${key}`).addClass('border-red-500');
		// 		$(`#${key}_Error`).html(applicationForm[key].error);
		// 	});
		// 	errorStatus = true;
		// }
		// if (!validateData.employmentValue) {
		// 	validateData.employmentNotValid.forEach((emp, idx) => {
		// 		console.log(emp, idx);
		// 		emp.forEach(key => {
		// 			console.log(key);
		// 			applicationForm.Employment[idx][key].valid = false;
		// 			applicationForm.Employment[idx][key].error = '此欄位不得空白';
		// 			$(`#Employment_Container > div:nth-child(${idx + 1}) .${key}`).addClass('border-red-500');
		// 			$(`#Employment_Container > div:nth-child(${idx + 1}) .${key}_Error`).html(
		// 				applicationForm.Employment[idx][key].error
		// 			);
		// 		});
		// 	});
		// }

		// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		// if (!emailRegex.test(applicationForm.Email.value)) {
		// 	applicationForm.Email.valid = false;
		// 	applicationForm.Email.error = '此欄位格式有誤';
		// 	$('#Email').addClass('border-red-500');
		// 	$('#Email_Error').html(applicationForm.Email.error);

		// 	errorStatus = true;
		// }

		// if (errorStatus) {
		// 	return;
		// }

		// if (avatar) {
		await postApplication();
		// }
	});

	function initializeChildTable({ btnName = '', keyName = '', childKeyList = [], childComponent = () => {} }) {
		let counter = 1;
		$(`#add-${btnName}-btn`).click(function () {
			const { length } = $(`#${keyName}_Container`).children().slice(0, -1);
			const nextChildId = ++counter;

			// Subtract Submit Button
			if (length === 4) {
				return;
			}

			let divBody = childComponent(nextChildId);
			divBody.insertBefore($(`#add-${btnName}-btn`));
			$(`#${keyName}_${nextChildId} .remove-${btnName}-btn`).click(removeItem);

			// Modify Form
			const newItem = {};
			childKeyList.forEach(_key => {
				newItem[_key] = { value: '', valid: true, error: '' };
				$(`#${keyName}_${nextChildId} .${_key}`).change(
					e => (applicationForm[keyName][length][_key].value = e.target.value)
				);
			});
			applicationForm[keyName] = [...applicationForm[keyName], newItem];

			// Update Placeholder
			rerender();
		});

		function removeItem() {
			const id = $(this).attr('data-id');
			const idx = $($(this).parent()).index();
			$(`#${keyName}_${id}`).remove();

			// Modify Form
			applicationForm[keyName] = [
				...applicationForm[keyName].slice(0, idx),
				...applicationForm[keyName].slice(idx + 1),
			];

			// Reorder Order Number
			const childrens = $(`#${keyName}_Container`).children().slice(0, -1);
			childrens.each(function (idx) {
				$(this)
					.find('> span:first-child')
					.html(idx + 1);
			});
		}

		$(`#${keyName}_1 .remove-${btnName}-btn`).click(removeItem);
	}

	/*
	 *	The following section is the functions of the Educational Level,
	 *	including adding and removing functions.
	 */
	initializeChildTable({
		btnName: 'educational-level',
		keyName: 'Educational_Level',
		childKeyList: ['Level', 'School_Name', 'Major_Subject', 'Start_Date', 'End_Date', 'Status'],
		childComponent: nextChildId =>
			$(`
				<div class="flex items-center gap-8 border-b border-light-gray" id="Educational_Level_${nextChildId}">
					<div class="flex-1 grid grid-cols-10 gap-x-8 gap-y-4 pb-8">
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="educational-level.level.title"></span>
							</div>
							<select
								class="Level form-select w-full rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3">
								<option hidden disabled selected value
									data-i18n="educational-level.level.placeholder">
								</option>
								<option value="國小" data-i18n="educational-level.level.option-1">
								</option>
								<option value="國中" data-i18n="educational-level.level.option-2">
								</option>
								<option value="高中" data-i18n="educational-level.level.option-3">
								</option>
								<option value="大學" data-i18n="educational-level.level.option-4">
								</option>
								<option value="研究所" data-i18n="educational-level.level.option-5">
								</option>
							</select>
							<span class="Level_Error -bottom-6 text-jardin-red"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-4">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="educational-level.school-name.title"></span>
							</div>
							<input type="text"
								class="School_Name block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="School_Name">
							<span class="School_Name_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-4">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="educational-level.major-subject.title"></span>
							</div>
							<input type="text"
								class="Major_Subject block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Major_Subject">
							<span class="Major_Subject_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-4">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="educational-level.start-date.title"></span>
							</div>
							<input type="date"
								class="Start_Date form-input block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3 cursor-pointer">
						</label>
						<label class="flex flex-col gap-2 col-span-4">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="educational-level.end-date.title"></span>
							</div>
							<input type="date"
								class="End_Date form-input block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3 cursor-pointer">
						</label>
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="educational-level.status.title"></span>
							</div>
							<select
								class="Status form-select w-full rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3">
								<option hidden disabled selected value
									data-i18n="educational-level.status.placeholder">
								</option>
								<option value="畢業" data-i18n="educational-level.status.option-1">
								</option>
								<option value="肄業" data-i18n="educational-level.status.option-2">
								</option>
								<option value="就學中" data-i18n="educational-level.status.option-3">
								</option>
							</select>
							<span class="Status_Error -bottom-6 text-jardin-red"></span>
						</label>
					</div>
					<svg data-id="${nextChildId}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke-width="1.5" stroke="currentColor"
						class="remove-educational-level-btn w-6 h-6 stroke-2 cursor-pointer">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			`),
	});

	/*
	 *	The following section is the functions of the Job Experience,
	 *	including adding and removing functions.
	 */
	initializeChildTable({
		btnName: 'job-experience',
		keyName: 'Job_Experience',
		childKeyList: ['Job_Title', 'Name_Of_Org', 'StartDate', 'EndDate'],
		childComponent: nextChildId =>
			$(`
				<div class="flex items-center gap-8 border-b border-light-gray" id="Job_Experience_${nextChildId}">
					<div class="flex-1 grid grid-cols-2 gap-x-8 gap-y-4 pb-8">
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="job-experience.position.title"></span>
							</div>
							<input type="text"
								class="Position block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Position">
							<span class="Position_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="job-experience.company-name.title"></span>
							</div>
							<input type="text"
								class="Company_Name block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Company_Name">
							<span class="Company_Name_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="job-experience.start-date.title"></span>
							</div>
							<input type="date"
								class="Start_Date form-input block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3 cursor-pointer">
						</label>
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="job-experience.end-date.title"></span>
							</div>
							<input type="date"
								class="End_Date form-input block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3 cursor-pointer">
						</label>
					</div>
					<svg data-id="${nextChildId}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke-width="1.5" stroke="currentColor"
						class="remove-job-experience-btn w-6 h-6 stroke-2 cursor-pointer">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			`),
	});

	/*
	 *	The following section is the functions of the Language Skill,
	 *	including adding and removing functions.
	 */
	initializeChildTable({
		btnName: 'language-skill',
		keyName: 'Language_Skill',
		childKeyList: ['Language', 'Listen', 'Read', 'Write', 'Speak'],
		childComponent: nextChildId =>
			$(`
				<div class="flex items-center gap-8 border-b border-light-gray" id="Language_Skill_${nextChildId}">
					<div class="flex-1 grid grid-cols-10 gap-x-8 gap-y-4 pb-8">
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="language-skill.language.title"></span>
							</div>
							<input type="text"
								class="Language block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Language">
							<span class="Language_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="language-skill.listen.title"></span>
							</div>
							<select id="Listen"
								class="form-select w-full rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3">
								<option hidden disabled selected value
									data-i18n="language-skill.option.placeholder">
								</option>
								<option value="精通" data-i18n="language-skill.option.option-1">
								</option>
								<option value="中等" data-i18n="language-skill.option.option-2">
								</option>
								<option value="略懂" data-i18n="language-skill.option.option-3">
								</option>
							</select>
							<span class="Listen_Error -bottom-6 text-jardin-red"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="language-skill.read.title"></span>
							</div>
							<select id="Read"
								class="form-select w-full rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3">
								<option hidden disabled selected value
									data-i18n="language-skill.option.placeholder">
								</option>
								<option value="精通" data-i18n="language-skill.option.option-1">
								</option>
								<option value="中等" data-i18n="language-skill.option.option-2">
								</option>
								<option value="略懂" data-i18n="language-skill.option.option-3">
								</option>
							</select>
							<span class="Read_Error -bottom-6 text-jardin-red"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="language-skill.write.title"></span>
							</div>
							<select id="Write"
								class="form-select w-full rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3">
								<option hidden disabled selected value
									data-i18n="language-skill.option.placeholder">
								</option>
								<option value="精通" data-i18n="language-skill.option.option-1">
								</option>
								<option value="中等" data-i18n="language-skill.option.option-2">
								</option>
								<option value="略懂" data-i18n="language-skill.option.option-3">
								</option>
							</select>
							<span class="Write_Error -bottom-6 text-jardin-red"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="language-skill.speak.title"></span>
							</div>
							<select id="Speak"
								class="form-select w-full rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3">
								<option hidden disabled selected value
									data-i18n="language-skill.option.placeholder">
								</option>
								<option value="精通" data-i18n="language-skill.option.option-1">
								</option>
								<option value="中等" data-i18n="language-skill.option.option-2">
								</option>
								<option value="略懂" data-i18n="language-skill.option.option-3">
								</option>
							</select>
							<span class="Speak_Error -bottom-6 text-jardin-red"></span>
						</label>
					</div>
					<svg data-id="${nextChildId}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke-width="1.5" stroke="currentColor"
						class="remove-language-skill-btn w-6 h-6 stroke-2 cursor-pointer">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			`),
	});

	/*
	 *	The following section is the functions of the Recommender,
	 *	including adding and removing functions.
	 */
	initializeChildTable({
		btnName: 'recommender',
		keyName: 'Recommender',
		childKeyList: ['Name', 'Phone', 'Company_Name', 'Relationship'],
		childComponent: nextChildId =>
			$(`
				<div class="flex items-center gap-8 border-b border-light-gray" id="Recommender_${nextChildId}">
					<div class="flex-1 grid grid-cols-5 gap-x-8 gap-y-4 pb-8">
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="recommender.name.title"></span>
							</div>
							<input type="text"
								class="Name block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Name">
							<span class="Name_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="recommender.phone.title"></span>
							</div>
							<input type="text"
								class="Phone block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Phone">
							<span class="Phone_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-2">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="recommender.company-name.title"></span>
							</div>
							<input type="text"
								class="Company_Name block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Company_Name">
							<span class="Company_Name_Error -bottom-6 text-red-500"></span>
						</label>
						<label class="flex flex-col gap-2 col-span-1">
							<div class="flex">
								<span class="text-dark-gray text-base"
									data-i18n="recommender.relationship.title"></span>
							</div>
							<input type="text"
								class="Relationship block w-full placeholder:text-gray rounded-md bg-gray-white border-transparent focus:border-gray-white focus:bg-white focus:ring-0 text-base px-4 py-3"
								name="Relationship">
							<span class="Relationship_Error -bottom-6 text-red-500"></span>
						</label>
					</div>
					<svg data-id="${nextChildId}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke-width="1.5" stroke="currentColor"
						class="remove-recommender-btn w-6 h-6 stroke-2 cursor-pointer">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			`),
	});
});
