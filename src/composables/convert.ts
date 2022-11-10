const patt = /[0-9]{11}/g

export function fixPhone(sheet: any[]) {
  const res: any[] = []
  for (let i = 0; i < sheet.length; i++) {
    const phones = sheet[i].phone
    let flag = true
    while (flag) {
      const phoneTemp = patt.exec(phones)
      if (phoneTemp) {
        res.push(Object.assign({}, sheet[i]))
        res[res.length - 1].phone = phoneTemp[0]
      }
      else {
        flag = false
      }
    }
  }
  return res
}

