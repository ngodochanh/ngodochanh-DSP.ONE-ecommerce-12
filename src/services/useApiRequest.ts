async function useApiRequest(url: string, method: string, data?: any) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    ...(data && { body: JSON.stringify(data) }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Đã xảy ra lỗi trong quá trình lấy dữ liệu.');
  }

  return await response.json();
}

export const useApiGet = (url: string) => useApiRequest(url, 'GET');

export const useApiDelete = (url: string) => useApiRequest(url, 'DELETE');

export const useApiPost = (url: string, data: any) => useApiRequest(url, 'POST', data);

export const useApiPut = (url: string, data: any) => useApiRequest(url, 'PUT', data);
