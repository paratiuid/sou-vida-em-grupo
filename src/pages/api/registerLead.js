import contacts from "./_contacts";
import assignContactToList from "./_assignContactToList";

export default async function registerLead(req, res) {
	if (req?.method !== 'POST') {
        return res.status(400);
    }

	let statusCode = 200;
	let rtnMessage = "OK";

	const reqRegisterContact = await contacts(req);

	if (!reqRegisterContact.status) {
		statusCode = 400;
		rtnMessage = "Falhou ao gravar contato";
	}

	const reqAssignContact = await assignContactToList(reqRegisterContact.id);

	if (!reqAssignContact.status) {
		statusCode = 400;
		rtnMessage = reqAssignContact.message;
	}

	return res.status(statusCode).json(rtnMessage || {});
}
