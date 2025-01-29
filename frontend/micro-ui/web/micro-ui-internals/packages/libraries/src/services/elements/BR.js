import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

const BRService = {
  create: (data, tenantId) =>
    Request({
      data: data,
      url: Urls.br.create,
      useCache: false,
      method: "POST",
      auth: true,
      userService: true,
      params: { tenantId },
    }),
  search: ({ tenantId, data, filter = {}, auth = false }) => {
    return Request({
      url: Urls.br.search,
      useCache: false,
      data: data,
      method: "POST",
      auth,
      userService: false,
      params: { tenantId, ...filter },
    });
  },
};

export default BRService;
