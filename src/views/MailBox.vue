<template>
    <div>
        <div class='loader'>
            <div class='spinner-grow text-primary' role='status'>
                <span class='sr-only'>Loading...</span>
            </div>
        </div>
        <div class="connect-container align-content-stretch d-flex flex-wrap">
            <div class="page-container">
                <div class="page-content">
                    <div class="page-info">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Mailbox</li>
                            </ol>
                        </nav>
                        <div class="page-options">
                            <a href="#" class="btn btn-primary" id="mail-compose">Compose</a>
                        </div>
                    </div>
                    <div class="main-wrapper">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="card-body">
                                        <ul class="mailbox-menu list-unstyled">
                                            <li><a href="#" class="active">Inbox<span class="badge badge-pill badge-success float-right">21</span></a></li>
                                            <li><a href="#">Sent</a></li>
                                            <li><a href="#">Important<span class="badge badge-pill badge-warning float-right">6</span></a></li>
                                            <li><a href="#">Promotions<span class="badge badge-pill badge-danger float-right">11</span></a></li>
                                            <li><a href="#">Social<span class="badge badge-pill badge-info float-right">3</span></a></li>
                                            <li><a href="#">Drafts</a></li>
                                            <li><a href="#">Spam</a></li>
                                        </ul>
                                        <h3 class="mailbox-menu-header">Contacts</h3>
                                        <ul class="mailbox-contacts list-unstyled">
                                            <li><a href="#"><img src="/assets/admin/images/avatars/profile-image-3.jpg">Louis Morgan</a></li>
                                            <li><a href="#"><img src="/assets/admin/images/avatars/profile-image-2.png">Allen Ford</a></li>
                                            <li><a href="#"><img src="/assets/admin/images/avatars/profile-image.png">William Adams</a></li>
                                        </ul>
                                        <h3 class="mailbox-menu-header">Groups</h3>
                                        <ul class="mailbox-groups list-unstyled">
                                            <li><a href="#"><i class="mailbox-group-friends"></i>Friends</a></li>
                                            <li><a href="#"><i class="mailbox-group-work"></i>Work</a></li>
                                            <li><a href="#"><i class="mailbox-group-family"></i>Family</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="inbox-options">
                                            <div class="inbox-checkbox-all">
                                                <div class="custom-control custom-checkbox form-group">
                                                    <input type="checkbox" class="custom-control-input" id="check-all-mail">
                                                    <label class="custom-control-label" for="check-all-mail"></label>
                                                </div>
                                            </div>
                                            <div class="inbox-page-count">
                                                Showing 1-50 of 3089
                                            </div>
                                            <div class="inbox-search">
                                                    <input type="text" class="form-control" id="searchInbox" placeholder="Search inbox">
                                            </div>
                                        </div>
                                        <ul class="inbox-list list-unstyled">
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail1">
                                                            <label class="custom-control-label" for="mail1"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image.png"> <span>William Adams</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Nullam quis risus eget urna mollis ornare vel eu leo
                                                    </div>
                                                    <div class="mail-date">
                                                        2hrs
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail2">
                                                            <label class="custom-control-label" for="mail2"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image-2.png"> <span>Allen Ford</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                    </div>
                                                    <div class="mail-date">
                                                        14 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail3">
                                                            <label class="custom-control-label" for="mail3"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image-3.jpg"> <span>Louis Morgan</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Nam quis nulla aliquet elit ornare iaculis
                                                    </div>
                                                    <div class="mail-date">
                                                        12 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail4">
                                                            <label class="custom-control-label" for="mail4"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image-1.png"> <span>David Simpson</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Ut sed risus eget nunc mattis dignissim a sit amet lectus
                                                    </div>
                                                    <div class="mail-date">
                                                        12 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail5">
                                                            <label class="custom-control-label" for="mail5"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image.png"> <span>Emilia Clark</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Orci varius natoque penatibus et magnis dis parturient montes
                                                    </div>
                                                    <div class="mail-date">
                                                        11 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail6">
                                                            <label class="custom-control-label" for="mail6"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image.png"> <span>William Adams</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Nullam quis risus eget urna mollis ornare vel eu leo
                                                    </div>
                                                    <div class="mail-date">
                                                        10 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail7">
                                                            <label class="custom-control-label" for="mail7"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image-2.png"> <span>Allen Ford</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                                    </div>
                                                    <div class="mail-date">
                                                        9 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail8">
                                                            <label class="custom-control-label" for="mail8"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image-3.jpg"> <span>Louis Morgan</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Nam quis nulla aliquet elit ornare iaculis
                                                    </div>
                                                    <div class="mail-date">
                                                        9 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail9">
                                                            <label class="custom-control-label" for="mail9"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image-1.png"> <span>David Simpson</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Ut sed risus eget nunc mattis dignissim a sit amet lectus
                                                    </div>
                                                    <div class="mail-date">
                                                        8 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail10">
                                                            <label class="custom-control-label" for="mail10"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image.png"> <span>Emilia Clark</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Orci varius natoque penatibus et magnis dis parturient montes
                                                    </div>
                                                    <div class="mail-date">
                                                        7 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);">
                                                    <div class="mail-checkbox">
                                                        <div class="custom-control custom-checkbox form-group">
                                                            <input type="checkbox" class="custom-control-input" id="mail11">
                                                            <label class="custom-control-label" for="mail11"></label>
                                                        </div>
                                                    </div>
                                                    <div class="mail-author">
                                                        <img src="/assets/admin/images/avatars/profile-image.png"> <span>William Adams</span>
                                                    </div>
                                                    <div class="mail-title">
                                                        Nullam quis risus eget urna mollis ornare vel eu leo
                                                    </div>
                                                    <div class="mail-date">
                                                        4 Apr
                                                    </div>
                                                    <div class="mail-star">
                                                        <i class="material-icons">star_border</i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="inbox-pagination">
                                            <nav>
                                                <ul class="pagination">
                                                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-footer">
                    <div class="row">
                        <div class="col-md-12">
                            <span class="footer-text">2019 © stacks</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mailbox-compose">
                <div class="mailbox-compose-content">
                    <div class="mailbox-compose-header">
                        <h5>Compose Message</h5>
                    </div>
                    <div class="mailbox-compose-body">
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="compose-email" placeholder="To">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Cc">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                            </div>
                            <div class="compose-options">
                                <a href="#"><i class="material-icons">text_format</i></a>
                                <a href="#"><i class="material-icons">attach_file</i></a>
                                <a href="#"><i class="material-icons">insert_link</i></a>
                                <a href="#"><i class="material-icons">insert_emoticon</i></a>
                                <a href="#"><i class="material-icons-outlined">insert_photo</i></a>
                                <a href="#"><i class="material-icons">delete_outline</i></a>
                            </div>
                            <div class="compose-buttons">
                                <a href="#" class="btn btn-block btn-success">Send</a>
                                <a href="#" class="btn btn-block btn-danger">Cancel</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="mailbox-item">
                <div class="mail-container">
                    <div class="mail-header">
                        <div class="mail-title">
                            Notes have been uploaded for next exam
                        </div>
                    </div>
                    <div class="mail-info">
                        <div class="mail-author">
                            <img src="/assets/admin/images/avatars/profile-image-2.png" alt="">
                            <div class="mail-author-info">
                                <span class="mail-author-name">William Adams</span>
                                <span class="mail-author-address">w.adams@gmail.com</span>
                            </div>
                        </div>
                        <div class="mail-other-info">
                            <span>18:01</span>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="mail-text">
                        <p>Dear Sir/Madam,<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ante id elit molestie ornare. Pellentesque porttitor facilisis risus, sit amet semper ante efficitur et. Etiam quis rutrum leo, vitae posuere augue. Donec odio leo, dapibus id sollicitudin vel, luctus sit amet justo. Aenean cursus, tellus ut consectetur commodo, est dolor fringilla mauris, nec tristique magna orci in diam. Cras eget libero sit amet felis tincidunt mattis.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ante id elit molestie ornare. Pellentesque porttitor facilisis risus, sit amet semper ante efficitur et. Etiam quis rutrum leo, vitae posuere augue. Donec odio leo, dapibus id sollicitudin vel, luctus sit amet justo. Aenean cursus, tellus ut consectetur commodo, est dolor fringilla mauris, nec tristique magna orci in diam. Cras eget libero sit amet felis tincidunt mattis.<br><br>Waiting your reply ASAP,<br>Thanks in advance.</p>
                    </div>
                    <div class="mail-actions">
                        <button class="btn btn-secondary">Reply</button>
                        <button class="btn btn-success">Forwawrd</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mailbox-compose-overlay"></div>
        <div class="mailbox-item-overlay"></div>
    </div>
</template>