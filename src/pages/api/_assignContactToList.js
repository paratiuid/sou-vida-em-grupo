export default async function assignContactToList(id) {

	let rtn = {
		status: true,
		message: "OK"
	};
	// automation = process.env.API_AUTOMATION.split(",");

	let assignToList = await reqAssingToList(id);
	if(!assignToList) {
		rtn.status = false;
		rtn.message = "Falhou ao registrar na lista";

		return rtn;
	}

	// for(let i=0,l=automation.length;i<l;i++) {
	// 	if(!reqAutomation(id,automation[i])) {
	// 		rtn.status = false;
	// 		rtn.message = `Falhou ao registrar automação nº ${automation[i]}`;

	// 		return rtn;
	// 	}
	// }

    return rtn;
}

async function reqAssingToList(contactId) {
	let reqObject = {
		"contactList": {
			"list": process.env.API_LIST_ID,
			"contact": parseInt(contactId),
			"status": process.env.API_STATUS
		}
	}


	const req = await fetch(
        `${process.env.API_URL}/contactLists`,
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

	if (req.status !== 201 && req.status !== 200) {
		return false;
    }

	return true;
}


// async function reqAutomation(contactId, automationId) {
// 	let reqObject = {
// 		"contactAutomation": {
// 			"contact": contactId,
// 			"automation": automationId
// 		}
// 	}

// 	const req = await fetch(
//         `${process.env.API_URL}/contactAutomations`,
//         {
//             method: 'POST',
//             body: JSON.stringify(reqObject),
//             headers: {
//                 'Api-Token': process.env.API_TOKEN,
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//         }
//     )

// 	if (req.status !== 201 && req.status !== 200) {
// 		return false;
//     }

// 	return true;
// }
