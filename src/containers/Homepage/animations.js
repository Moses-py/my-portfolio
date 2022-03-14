
  export const logoVariant = {
    visible: {
        opacity: 1,
        transition: {
            delay: 1.8,
            when:"beforeChildren"
        }
    },
    hidden: {
      opacity: 0
    }
}

export const strongVariant = {
    visible: {
      opacity: 1,
      transition: {
        delay: 1
      }
    },
    hidden: {
      opacity: 0,
    }
  }

  export const paragraphVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    },
    hidden: {
      y: -50,
      opacity: 0
    }
  }

  export const socialVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      }
    },
    hidden: {
      opacity: 0
    }
  }

  export const socialIconVariant= {
    visible: {
      opacity: 1,
      staggerChildren: 0.5,
      transition: {
        delay: 0.9,
      }
    },
    hidden: {
      opacity: 0
    }
  }

  export const navigationVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 30,
      }
    },
    hidden: {
      opacity: 0,
      y: -20
    },
    hover: {
      transition: {type: "spring", stiffness: 10}
    }
  }

  export const navigationTextVariant = {
    visible: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 20
      }
    }
  }

  export const navigationParagraph = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 10
      }
    },
    hidden: {
      opacity: 0,
    },
    hover: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.5
      }
    }
  }

  export const navigationParagraphHidden = {
    visible: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }    
  }

  export const navigationOverlayVariant = {
    visible: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }