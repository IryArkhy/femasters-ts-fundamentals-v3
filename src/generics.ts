const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
  ]

  const phoneDict = {
    "0001": {
      customerId: "0001",
      areaCode: "321",
      num: "123-4566",
    },
    "0002": {
      customerId: "0002",
      areaCode: "174",
      num: "142-3626",
    },
    /*... and so on */
  }

  interface PhoneInfo {
    customerId: string
    areaCode: string
    num: string
  }


  function listToDict<T>(
    list: T[],
    idGen: (arg: T) => string
  ): { [k: string]: T } {
    const dict: { [k: string]: T } = {}

    list.forEach((element) => {
      const dictKey = idGen(element)
      dict[dictKey] = element
    })
    return dict
  }
   
  const dict1 = listToDict<{name: string}>(
    [{ name: "Mike" }, { name: "Mark" }],
    (item) => item.name
  )

const dict2 = listToDict<PhoneInfo>(phoneList, (item) => item.customerId);
/**
 * {
    [k: string]: PhoneInfo;
}
 */
const dict3 = listToDict(phoneList, (item) => item.customerId);
/**
 * {
    [k: string]: {
        customerId: string;
        areaCode: string;
        num: string;
    };
}
 */

// GENERICS exercise


  // Generics scopes and constraints

  // constraints
  interface HasId {
    id: string
  }
  interface DDict<T> {
    [k: string]: T
  }
   
  function listToDict2<T extends HasId>(list: T[]): Dict<T> {
    const dict: DDict<T> = {}
   
    list.forEach((item) => {
      dict[item.id] = item
    })
   
    return dict
  }

// scopes

// outer function
function tupleCreator<T>(first: T) {
    // inner function
    return function finish<S>(last: S): [T, S] {
      return [first, last]
    }
  }
  const finishTuple = tupleCreator(3)