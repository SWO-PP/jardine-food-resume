$(document).ready(function () {
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

	// Query auto fill in
	const Shop_ID = getQueryVariable('shop_id');
	$('#Shop_ID').val(Shop_ID);
	$('#Today').html(dayjs().format('YYYY/MM/DD'));

	// Init Form Value
	let applicationForm = {
		Name_Zh: { value: '', valid: true, error: '' },
		Name_En: { value: '', valid: true, error: '' },
		Birth_Date: { value: '', valid: true, error: '' },
		Gender: { value: 'Male', valid: true, error: '' },
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
