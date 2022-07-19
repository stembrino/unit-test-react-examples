class Request {
  public static get = async (url: string): Promise<any> => {
    try {
      const responseInfo = await fetch(url);
      if (responseInfo.status !== 200) throw new Error("Error getting the request");
      return responseInfo.json();
    } catch (error) {
      console.log(error);
    }
  };
}

export default Request;
