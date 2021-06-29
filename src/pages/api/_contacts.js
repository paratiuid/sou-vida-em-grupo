export default async function contacts(req) {

    let body = req.body;
	let firstName = body.name.split(" ").slice(0,-1).join(" ");
	let lastName = body.name.split(" ").slice(-1).join("");
	let cleanPhone = body.phone.replace(/\D/g, "");
	let ddd = cleanPhone.substring(0,2);
	let number = cleanPhone.substring(2,11);

	let rtn = {
		id: null,
		status: true
	};

	let reqObject = {
		"contact": {
			"email": body.email,
			"firstName": firstName,
			"lastName": lastName,
			"fieldValues":[
				{
					"field":"1",
					"value": body.company
				},
				{
					"field":"6",
					"value": body.cnpj
				},
				{
					"field":"3",
					"value": body.lifes
				},
				{
					"field":"4",
					"value": ddd
				},
				{
					"field":"5",
					"value": number
				}
			]
		}
	}

    const reqCreateContact = await fetch(
		`${process.env.API_URL}/contact/sync`,
        {
            method: 'POST',
            body: JSON.stringify(reqObject),
            headers: {
                'Api-Token': process.env.API_TOKEN,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
    )

    if (reqCreateContact.status !== 201 && reqCreateContact.status !== 200) {
        rtn.status = false;
		return rtn;
    }

    const json = await reqCreateContact.json();
	rtn.id = json.contact.id;

    return rtn;
}
