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
	$('input[name=Height]').attr('placeholder', $.t('basic-information.height.placeholder'));
	$('input[name=Weight]').attr('placeholder', $.t('basic-information.weight.placeholder'));
	$('input[name=Email]').attr('placeholder', $.t('basic-information.email.placeholder'));
	$('input[name=Mobile_Phone]').attr('placeholder', $.t('basic-information.mobile-phone.placeholder'));
	$('input[name=Contact_Address]').attr('placeholder', $.t('basic-information.contact-address.placeholder'));
	$('input[name=Residence_Address]').attr('placeholder', $.t('basic-information.residence-address.placeholder'));
	$('input[name=Educational_Level_School_Name]').attr(
		'placeholder',
		$.t('educational-level.school-name.placeholder')
	);
	$('input[name=Educational_Level_Major_Subject]').attr(
		'placeholder',
		$.t('educational-level.major-subject.placeholder')
	);
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

	// langauge
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
							button: 'Add Educational Level',
						},
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
							button: '新增教育程度',
						},
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

	const Shop_ID = getQueryVariable('shop_id');
	$('#Shop_ID').val(Shop_ID);
	$('#Today').html(dayjs().format('YYYY/MM/DD'));

	// Init Form Value
	let applicationForm = {
		Name_Zh: { value: '', valid: true, error: '' },
		Name_En: { value: '', valid: true, error: '' },
		Birth_Date: { value: '', valid: true, error: '' },
		Gender: { value: '', valid: true, error: '' },
		Email: { value: '', valid: true, error: '' },
		Employment: [
			{
				From_Date: { value: '', valid: true, error: '' },
				To_Date: { value: '', valid: true, error: '' },
				Company: { value: '', valid: true, error: '' },
				Title: { value: '', valid: true, error: '' },
			},
		],
	};
	$('#Name_Zh').change(e => (applicationForm.Name_Zh.value = e.target.value));
	$('#Name_En').change(e => (applicationForm.Name_En.value = e.target.value));
	$('#Birth_Date').change(e => (applicationForm.Birth_Date.value = e.target.value));
	$('#Gender').change(e => (applicationForm.Gender.value = e.target.value));
	$('#Email').change(e => (applicationForm.Email.value = e.target.value));
	$('#Employment_1 .From_Date').change(e => (applicationForm.Employment[0].From_Date.value = e.target.value));
	$('#Employment_1 .To_Date').change(e => (applicationForm.Employment[0].To_Date.value = e.target.value));
	$('#Employment_1 .Company').change(e => (applicationForm.Employment[0].Company.value = e.target.value));
	$('#Employment_1 .Title').change(e => (applicationForm.Employment[0].Title.value = e.target.value));

	// File Uploader & Submit API
	let avatarPreview;
	let attachmentPreview;

	const postApplication = async () => {
		// const applicationUrl =
		// 	'https://prod-43.southeastasia.logic.azure.com/workflows/9678e0dde2b64671b83d4e7e4fcfd054/triggers/manual/paths/invoke/application?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=y1RMcXk4t7PSjpxEoZmNnqWw7KbayA83gfIIv0lWVmo';
		try {
			const Application_SN = `AP-${dayjs().format('YYYYMMDDHHmmss')}`;
			const Employment_SN = `EM-${dayjs().format('YYYYMMDDHHmmss')}`;
			let body = {
				// Form
				Name_Zh: applicationForm.Name_Zh.value,
				Name_En: applicationForm.Name_En.value,
				Birth_Date: applicationForm.Birth_Date.value,
				Gender: applicationForm.Gender.value,
				Email: applicationForm.Email.value,
				Employment: applicationForm.Employment.map(data => ({
					...data,
					Employment_SN,
					Application_SN,
				})),
				// Other
				Shop_ID,
				Application_SN,
				Avatar: avatarPreview.content,
				Attachment: attachmentPreview,
			};
			console.log(body);

			// let response = fetch(applicationUrl, {
			// 	body: JSON.stringify(body),
			// 	headers: {
			// 		'user-agent': 'Mozilla/4.0 MDN Example',
			// 		'content-type': 'application/json',
			// 	},
			// 	method: 'POST',
			// });
			// console.log(response);
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
		};
		avatarReader.onloadend = function (e) {
			console.log(e.target.result);
		};
		avatarReader.onerror = function (e) {
			console.error(e.target.error);
		};
		avatarReader.readAsDataURL(file.prop('files')[0]);
	});

	$('#Attachment').on('change', function () {
		let file = $(this);
		let attachmentReader = new FileReader();
		attachmentReader.onload = function (e) {
			attachmentPreview = {
				name: file.prop('files')[0].name,
				'content-type': file.prop('files')[0].type,
				content: e.target.result.split(',').pop(),
			};
			console.log(attachmentPreview);
		};
		attachmentReader.onloadend = function (e) {
			console.log(e.target.result);
		};
		attachmentReader.onerror = function (e) {
			console.error(e.target.error);
		};
		attachmentReader.readAsDataURL(file.prop('files')[0]);
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

	const clearEmploymentData = (data, keyArray) => {
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
		const newData = clearData(_.omit(data, ['Employment']), [
			'Name_Zh',
			'Name_En',
			'Birth_Date',
			'Gender',
			'Email',
		]);
		const emp = data.Employment.map(_emp =>
			clearEmploymentData(_emp, ['From_Date', 'To_Date', 'Company', 'Title'])
		);

		return { ...newData, Employment: emp };
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
		const valueResult = examValue(data, ['Name_Zh', 'Name_En', 'Birth_Date', 'Gender', 'Email']);
		const employmentResult = data.Employment.map(emp =>
			examValue(emp, ['From_Date', 'To_Date', 'Company', 'Title'])
		);
		console.log(valueResult, employmentResult);

		return {
			value: valueResult.value,
			notValid: valueResult.notValid,
			employmentValue: employmentResult.every(({ value }) => value),
			employmentNotValid: employmentResult.map(res => [...res.notValid]),
		};
	};

	// Submit
	$('#submit-btn').click(async () => {
		let errorStatus = false;
		const avatar = $('#Avatar').prop('files')[0];
		const attachment = $('#Attachment').prop('files')[0];

		// Clear Validation
		applicationForm = clearFormError(applicationForm);

		// Validate
		const validateData = examFormData(applicationForm);
		console.log('validateData', validateData);
		if (!validateData.value) {
			validateData.notValid.forEach(key => {
				applicationForm[key].valid = false;
				applicationForm[key].error = '此欄位不得空白';
				$(`#${key}`).addClass('border-red-500');
				$(`#${key}_Error`).html(applicationForm[key].error);
			});
			errorStatus = true;
		}
		if (!validateData.employmentValue) {
			validateData.employmentNotValid.forEach((emp, idx) => {
				console.log(emp, idx);
				emp.forEach(key => {
					console.log(key);
					applicationForm.Employment[idx][key].valid = false;
					applicationForm.Employment[idx][key].error = '此欄位不得空白';
					$(`#Employment_Container > div:nth-child(${idx + 1}) .${key}`).addClass('border-red-500');
					$(`#Employment_Container > div:nth-child(${idx + 1}) .${key}_Error`).html(
						applicationForm.Employment[idx][key].error
					);
				});
			});
		}

		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (!emailRegex.test(applicationForm.Email.value)) {
			applicationForm.Email.valid = false;
			applicationForm.Email.error = '此欄位格式有誤';
			$('#Email').addClass('border-red-500');
			$('#Email_Error').html(applicationForm.Email.error);

			errorStatus = true;
		}

		if (errorStatus) {
			return;
		}

		if (avatar && attachment) {
			await postApplication();
		}
	});

	// Add Job Experience Item
	let counter = 1; // Increment Employment Id
	$('#add-job-btn').click(function () {
		const { length } = $('#Employment_Container').children().slice(0, -1);
		const nextChildId = ++counter;

		// Subtract Submit Button
		if (length === 4) {
			return;
		}

		let divBody = $(
			`<div class="flex flex-col md:flex-row items-stretch gap-6" id="Employment_${nextChildId}">
				<span class="bg-gray-200 leading-none rounded p-2 md:mb-1.5 md:mt-8 self-start">${length + 1}</span>
				<label class="block flex-1">
					<span class="text-gray-700">開始任職</span>
					<input type="date"
						class="From_Date form-input mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
					<span class="From_Date_Error -bottom-6 text-red-500"></span>
				</label>
				<label class="block flex-1">
					<span class="text-gray-700">結束任職</span>
					<input type="date"
						class="To_Date form-input mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
					<span class="To_Date_Error -bottom-6 text-red-500"></span>
				</label>
				<label class="block flex-1">
					<span class="text-gray-700">公司名稱</span>
					<input type="text"
						class="Company form-input mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
					<span class="Company_Error -bottom-6 text-red-500"></span>
				</label>
				<label class="block flex-1">
					<span class="text-gray-700">工作職稱</span>
					<input type="text"
						class="Title form-input mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
					<span class="Title_Error -bottom-6 text-red-500"></span>
				</label>
				<svg data-id="${nextChildId}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					stroke-width="1.5" stroke="currentColor" class="remove-job-btn w-6 h-6 stroke-2 md:mt-9">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>`
		);
		divBody.insertBefore($('#add-job-btn'));
		$(`#Employment_${nextChildId} .remove-job-btn`).click(removeJob);

		// Modify Form
		applicationForm.Employment = [
			...applicationForm.Employment,
			{
				From_Date: { value: '', valid: true, error: '' },
				To_Date: { value: '', valid: true, error: '' },
				Company: { value: '', valid: true, error: '' },
				Title: { value: '', valid: true, error: '' },
			},
		];
		$(`#Employment_${nextChildId} .From_Date`).change(
			e => (applicationForm.Employment[length].From_Date.value = e.target.value)
		);
		$(`#Employment_${nextChildId} .To_Date`).change(
			e => (applicationForm.Employment[length].To_Date.value = e.target.value)
		);
		$(`#Employment_${nextChildId} .Company`).change(
			e => (applicationForm.Employment[length].Company.value = e.target.value)
		);
		$(`#Employment_${nextChildId} .Title`).change(
			e => (applicationForm.Employment[length].Title.value = e.target.value)
		);
	});

	function removeJob() {
		const id = $(this).attr('data-id');
		const idx = $($(this).parent()).index();
		$(`#Employment_${id}`).remove();

		// Modify Form
		applicationForm.Employment = [
			...applicationForm.Employment.slice(0, idx),
			...applicationForm.Employment.slice(idx + 1),
		];

		// Reorder Order Number
		const childrens = $('#Employment_Container').children().slice(0, -1);
		childrens.each(function (idx) {
			$(this)
				.find('> span:first-child')
				.html(idx + 1);
		});
	}

	$('#Employment_1 .remove-job-btn').click(removeJob);
});
