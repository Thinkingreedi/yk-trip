import myRequest from '../request'

export function getDetailInfos(houseId) {
  return myRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}