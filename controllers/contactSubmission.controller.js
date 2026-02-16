import ContactSubmission from '../models/ContactSubmission.model.js'

// @desc    Submit contact form
// @route   POST /api/contact/submit
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, program, message, consent } = req.body

    // Validation
    if (!fullName || !phoneNumber || !email || !program || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        message: 'Consent is required to submit the form'
      })
    }

    const submission = await ContactSubmission.create({
      fullName,
      phoneNumber,
      email,
      program,
      message,
      consent
    })

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you within 24 hours.',
      data: submission
    })
  } catch (error) {
    console.error('Contact form submission error:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Error submitting contact form'
    })
  }
}

// @desc    Get all contact submissions (admin)
// @route   GET /api/contact/submissions
// @access  Private
export const getAllSubmissions = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query
    const query = status ? { status } : {}

    const submissions = await ContactSubmission.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v')

    const total = await ContactSubmission.countDocuments(query)

    res.json({
      success: true,
      data: submissions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Get submissions error:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching submissions'
    })
  }
}

// @desc    Get single submission (admin)
// @route   GET /api/contact/submissions/:id
// @access  Private
export const getSubmission = async (req, res) => {
  try {
    const submission = await ContactSubmission.findById(req.params.id)

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      })
    }

    res.json({
      success: true,
      data: submission
    })
  } catch (error) {
    console.error('Get submission error:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching submission'
    })
  }
}

// @desc    Update submission status (admin)
// @route   PUT /api/contact/submissions/:id
// @access  Private
export const updateSubmission = async (req, res) => {
  try {
    const { status, notes } = req.body

    const submission = await ContactSubmission.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true, runValidators: true }
    )

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      })
    }

    res.json({
      success: true,
      message: 'Submission updated successfully',
      data: submission
    })
  } catch (error) {
    console.error('Update submission error:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating submission'
    })
  }
}

// @desc    Delete submission (admin)
// @route   DELETE /api/contact/submissions/:id
// @access  Private
export const deleteSubmission = async (req, res) => {
  try {
    const submission = await ContactSubmission.findByIdAndDelete(req.params.id)

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      })
    }

    res.json({
      success: true,
      message: 'Submission deleted successfully'
    })
  } catch (error) {
    console.error('Delete submission error:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting submission'
    })
  }
}
